# Abstracts Tokens

The `abstracts/variables/*` folder is the _only_ directory to include the **actual** token values.
Utilizing [Style Dictionary](https://amzn.github.io/style-dictionary/#/properties). To generate values run `yarn tkn`

TODO: Update [Breakpoints](https://devhints.io/resolutions)
////

body {
  font: font-style font-variant font-weight font-size/line-height font-family;
}
In Use
body {
  font: italic small-caps normal 13px/150% Arial, Helvetica, sans-serif;
}
You need to supply at least font-size and font-family for the shorthand to work, otherwise it’ll just be a syntax error and do nothing.

body {
  font: italic 20px Serif; /* works */
  font: 20px; /* fails */
  font: 18em Fantasy; /* works */
  font: bold small-caps; /* fails */
}
////
