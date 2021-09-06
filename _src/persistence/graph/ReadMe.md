# arangodb
> [INSTALL](https://www.arangodb.com/docs/stable/installation-mac-osx.html)
> [DOCS](https://www.arangodb.com/documentation/)

## DB Access
https://www.arangodb.com/docs/stable/programs-arangosh.html
> `$ arangosh`
> `Please specify a password:` \<LEAVE_BLANK>
https://www.arangodb.com/docs/stable/programs-web-interface.html
> defaults to: http://127.0.0.1:8529/
> un root
> pw \<LEAVE_BLANK>
- https://www.arangodb.com/docs/stable/programs.htmls

## Implementation Article
- https://www.arangodb.com/docs/stable/data-modeling-naming-conventions.html
- https://www.arangodb.com/docs/stable/data-modeling-documents-schema-validation.html
- https://www.arangodb.com/docs/stable/data-modeling-views.html


## Tutorials
- https://www.arangodb.com/docs/stable/aql/tutorial.html
- https://www.arangodb.com/learn/
  - https://github.com/arangodb/interactive_tutorials#readme

### Snippets
```
db._createDatabase('tutorials')
db._databases()
db._name()
db._useDatabase('tutorials')
db._name()
db._collections()
db._create(name="TutorialTest")
db._collections()
# Create EDGE collection
db._createEdgeCollection(name="TutorialTestEdge")
```
### BASIC
#### [CRUD](https://www.arangodb.com/docs/stable/aql/tutorial-crud.html)
> shell version: https://colab.research.google.com/github/arangodb/interactive_tutorials/blob/master/notebooks/AqlCrudTutorial.ipynb#scrollTo=E_d0PLSmXFCl
```
# CREATE
makeNed=`INSERT { "name":"Ned", "surname":"Stark","alive":true,"age":41,"traits":["A","H","C","N","P"] } INTO Characters`
stmt = db._createStatement(makeNed)
stmt.getQuery()
cursor = stmt.execute()
# > docs = cursor.toArray()
# > > _OR_
# > while (cursor.hasNext()) { print(cursor.next())

## CREATE LOOP
iq=`LET data = [
    { "name": "Robert", "surname": "Baratheon", "alive": false, "traits": ["A","H","C"] },
    { "name": "Jaime", "surname": "Lannister", "alive": true, "age": 36, "traits": ["A","F","B"] }
  ]
  FOR d IN data
    INSERT d INTO Characters`
stmt = db._createStatement(iq)
cursor = stmt.execute()

# READ
all_chars = `FOR c IN Characters RETURN c`
query_result = db._createStatement(allChars, rawResults=true)
qRes = query_result.execute()
qRes.toArray()
qRes = query_result.execute()
while (qRes.hasNext()) { print(qRes.next())}

ned_qry=`FOR c IN Characters FILTER c.name == "Ned" RETURN c`
ned_key=`FOR c IN Characters
    FILTER c.name == "Ned"
    RETURN c._key`
# nkQry=db._createStatement(ned_key,rawResults=true).execute()
# nkQry=db._query(ned_key,rawResults=true).execute()
# nkArr=nkQry.toArray()
# ABOVE 3 LINES IS THE EQUIVALENT TO BELOW SINGLE LINE
nkArr=db._query(ned_key,rawResults=true).toArray()
nKey=nkArr[0]

# UPDATE
> PATCH equiv
 kill_ned_qry=`UPDATE @nedkey WITH {alive:false} IN Characters`
 kill_ned_stmt=db._createStatement(kill_ned_qry)
 kill_ned_stmt.bind('nedkey',nKey)
db._query(ned_qry).toArray() // Ned is alive
 kill_ned_stmt.execute()
db._query(ned_qry).toArray() // Ned is dead

## UPDATE-LOOP
season_one=db._query(`FOR c IN Characters
    UPDATE c WITH { season: 1 } IN Characters`, rawResults:false).toArray()

### REPLACE
> PUT equiv
REPLACE @nedkey WITH {
    name: "Ned",
    surname: "Stark",
    alive: false,
    age: 41,
    traits: ["A","H","C","N","P"]
} IN Characters

# DELETE
del_ned_qry=`REMOVE @nedkey IN Characters`
del_ned_stmt=db._createStatement(del_ned_qry)
del_ned_stmt.bind('nedkey',nKey)
del_ned_stmt.execute()

# DELETE-LOOP
db._query(`FOR c IN Characters
    REMOVE c IN Characters`)
```

#### [SORT|LIMIT|FITLER](https://www.arangodb.com/docs/stable/aql/tutorial-filter.html)
```
rng_qry=`FOR c IN Characters
    FILTER c.age >= 13
    RETURN c.name`
rng_null_qry=`FOR c IN Characters
    FILTER c.age < 13
    RETURN { name: c.name, age: c.age }`
rng_non_null_qry=`FOR c IN Characters
    FILTER c.age < 13
    FILTER c.age != null
    RETURN { name: c.name, age: c.age }`
rng_non_null_equiv_qry=`FOR c IN Characters
    FILTER c.age < 13 AND c.age != null
    RETURN { name: c.name, age: c.age }`
alt_qry=`FOR c IN Characters
    FILTER c.name == "Jon" OR c.name == "Joffrey"
    RETURN { name: c.name, surname: c.surname }`
lim_five=`FOR c IN Characters
    LIMIT 5
    RETURN c.name`
lim_two_five=`FOR c IN Characters
    LIMIT 2, 5
    RETURN c.name`
sort_name=`FOR c IN Characters
    SORT c.name
    LIMIT 10
    RETURN c.name`
sort_name_desc=`FOR c IN Characters
    SORT c.name DESC
    LIMIT 10
    RETURN c.name`
sort_multiple=`FOR c IN Characters
    FILTER c.surname
    SORT c.surname, c.name
    LIMIT 10
    RETURN {
        surname: c.surname,
        name: c.name
    }`
sort_age=`FOR c IN Characters
    FILTER c.age
    SORT c.age
    LIMIT 10
    RETURN {
        name: c.name,
        age: c.age
    }`
```
#### [JOIN EQUIV](https://www.arangodb.com/docs/stable/aql/tutorial-join.html)
```
char_traits=`FOR c IN Characters
    RETURN c.traits`
char_traits_doc=`FOR c IN Characters
    RETURN DOCUMENT("Traits", c.traits)`
char_traits_doc_en=`FOR c IN Characters
    RETURN DOCUMENT("Traits", c.traits)[*].en`
merge_char_traits_doc_en=`FOR c IN Characters
    RETURN MERGE(c, { traits: DOCUMENT("Traits", c.traits)[*].en } )`
merge_char_traits_doc_en_equiv=`FOR c IN Characters
  RETURN MERGE(c, {
    traits: (
      FOR key IN c.traits
        FOR t IN Traits
          FILTER t._key == key
          RETURN t.en
    )
  })`
ctdArr=db._query(char_traits_doc,rawResults=true).toArray()
ctdEnArr=db._query(char_traits_doc_en,rawResults=true).toArray()
mergeCtdEnArr=db._query(merge_char_traits_doc_en,rawResults=true).toArray()
equivalentMergeCtdEnArr=db._query(merge_char_traits_doc_en_equiv,rawResults=true).toArray()
```

### GRAPH
**REFERENCE**
_TRAVERSAL_:
- `<INT>..<INT>` specifies `min_node_distance` .. `max_node_distance`
- `OUTBOUND` points "away" from node, `INBOUND` points "toward" node
```
# create edge collection
db._createEdgeCollection(name="ChildOf")
# > For creating the edges we face one challenge: The character documents don’t have user-defined keys.
# > - If they had, it would allow us to create the edges more easily like:
# > > `INSERT { _from: "Characters/robb", _to: "Characters/ned" } INTO ChildOf`
# https://colab.research.google.com/github/arangodb/interactive_tutorials/blob/master/notebooks/AqlTraversalTutorial.ipynb#scrollTo=Ah1TN7youZgW
# See "Create Edges Query on above link
```
#### [TRAVERSALS](https://www.arangodb.com/docs/stable/aql/graphs-traversals.html)
```
sansa_parents_qry=`FOR c IN Characters
        // First find the start node, i.e., sansa
        FILTER c.name == "Sansa"
        // Then start a Graph traversal from that start node
        FOR v IN 1..1 OUTBOUND c ChildOf
        RETURN v.name`
ned_children_qry=`FOR c IN Characters
    // First find the start node, i.e., ned
    FILTER c.name == "Ned"
    // Then start a Graph traversal from that start node
    FOR v IN 1..1 INBOUND c ChildOf
    RETURN v.name`
tywin_grandchildren_qry=`FOR c IN Characters
    // First find the start node, i.e., tywin
    FILTER c.name == "Tywin"
    // Then start a Graph traversal from that start node
    FOR v IN 2..2 INBOUND c ChildOf
    RETURN v.name`
tywin_grandchildren_distinct_qry=`FOR c IN Characters
    // First find the start node, i.e., tywin
    FILTER c.name == "Tywin"
    // Then start a Graph traversal from that start node
    FOR v IN 2..2 INBOUND c ChildOf
    RETURN DISTINCT v.name`
# To return the parents and grandparents of Joffrey,
# we can walk edges in OUTBOUND direction and adjust the traversal depth to go:
## at least 1 step, and 2 at most
### (i.e., IN 1..2):
joffrey_ancestor_qry=`FOR c IN Characters
    FILTER c.name == "Joffrey"
    FOR v IN 1..2 OUTBOUND c ChildOf
        RETURN DISTINCT v.name`

sansaParentsQry=db._query(sansa_parents_qry,rawResults=true).toArray()
nedChildrenQry=db._query(ned_children_qry,rawResults=true).toArray()
tywinGrandchildrenQry=db._query(tywin_grandchildren_qry,rawResults=true).toArray()
tywinGrandchildrenDistinctQry=db._query(tywin_grandchildren_distinct_qry,rawResults=true).toArray()
joffreyAncestorQry=db._query(joffrey_ancestor_qry,rawResults=true).toArray()
```
#### [GEOSPATIAL](https://www.arangodb.com/docs/stable/aql/tutorial-geospatial.html)
- TODO: When needed
