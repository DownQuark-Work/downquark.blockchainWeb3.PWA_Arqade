# Fat Red Bird
> An ultra-casual, non-fungible, Interplanetary game of Round Robin taking place on the blockchain

## TL;DR
Bringing the turn based, pen and paper game into the modern era by:
- making it digital
- decentralizing creative content
- using the immutable blockchain to verify ownership
  - and adding voting as well

### A modern take on an old game.
There were many variations years ago. And I'm taking many liberties while creating this. I am always open to constructive feedback. And am positive I have missed more than one obvious error. Please don't hesitate to reach out with thoughts, questions, suggestions, and _PR's_!

#### HOW TO PLAY
The basic rules are simple:
1. Provide a writing prompt to be the topic of the story
1. Have one player start the story by writing an agreed upon amount of text
	- sentence
	- paragraph
	- word count
	- etc
1. Another player then reads the text, and their own to describe what happens next.
1. Players continue to contribute to the story by adding their own text.
1. The game ends when on a specified condition.
	- All users have taken `x` amount of turns
	- An allotted amount of time has elapsed
	- etc

#### INTERACTION
This game is played primarily in a [browser extension](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/) which takes the following into account:
- User's will probably only use the app for a few minutes at a time
	- As an extension they will be able to do so without interrupting their current workflow
- When user's are involved in a _Challenge_ they can be alerted via:
	- icon updates
	- notifications
		-  of the game's status
		- if/when it is their turn
		- time remaining
			- etc
- [PWA Advantages](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#advantages_of_web_applications)
- Scaleability/Noticeability
	- If more applications were created that integrated with _**Fat Red Bird**_ they could be displayed on the landing page immediately alerting users of its existence.
- Community
	- It is from the extension that pages not directly related to the app can be viewed
		- user profiles / avatars / awards / etc.
	- As well as messages sent/received
		- Most NFTs purchased from the _Library_ can be applied to these pages

#### Before Using the App
The following concepts are integral to the experience
- `INQ`
    - A new, fungible, dynamic which _(hopefully)_ enhances the users' experience.
    - Can be bought with `Eth`
    - Expended when _Creating & Entering Challenges_, _Creating & Generating Prompts_, _Voting*_, _Commenting*_, and within the _Library_
    - Can be earned through _Challenges_ and _Library_ sales
> Voting and Commenting do not always require `INQ`
- `InqWell`
   - Akin to karma
   - Gained as you vote, comment on submissions, and share on social media
   - Lost as interaction lags
   - Allows no `INQ` to be used during submissions for certain actions
     - e.g. with `x` amount of `InqWell` you can vote `y` times and leave `z` comments per day without using `INQ`
- Navigation
   - In many cases a single submission may have multiple submissions appended to it
   - You are free to _Choose Your Own Path_ in these instances
   - Breadcrumbs will be created as you navigate the submissions, allowing you to backtrack at any time and choose a different route to explore
- Voting
  - It is _only_ required to vote in the _Challenges_ that you have competed in
  - [Quadratic voting](https://quadraticvote.co) would be a nice feature to include
  - Your `InqWell` will be affected by how often (and fair) you vote
 - Commenting
     -  _Never_ required
     - Your `InqWell` will be affected by how often (and troll-less) you comment
	 - Submitting _(details still a wip)_
		 - **Writings, Challenge Entries & Prompts**
			 - In order to reduce the amount of `gas` required to save your submission:
				 - Text and metadata will be saved to IPFS
				 - Only the link to the text will be saved to the blockchain


#### Using the App
A few options will be available upon login.
1. Read
	1. Recent
	2. Pending Challenges
	3. Random
	4. Search
1. Write
	1. Endless Nest
	2. Daily Nest
	3. Prompt
		- create
		- generate
	4. Challenge
		- create
		- join
1. Library
	1. Buy
	2. Auction


##### READ
1.	_RECENT_:
	-	A list of the most recent _Challenge_ **and** _Endless Nest_ submissions will be available to choose from
1.	_PENDING CHALLENGES_:
	-	Challenges where the writing stage has ended, but the voting stage is still active will be shown here
1.	_RANDOM_: A random _Challenge_ **or** _Endless Nest_ can be requested
1. _SEARCH_: Search by criteria (TBD)

##### WRITE
> initially: plain text and markdown to be accepted
1. _Endless Nest_:
	- This is the thread of submissions started when the contract was initially deployed.
		- Unlike all other challenges the criteria is open ended for this thread
			- anyone can add their submission
			- a submission can be added anywhere in the thread's history
			- there are no limits to the amount of times users may submit
			- the thread has no expiration date, nor any other termination rules
2. _Daily Nest_:
	- Each day a randomly generated (Markov) Prompt will be created.
		- The same rules from **Endless Nest** apply
		- With the exception that no submissions can _only_ be added for a 24 hour period

>**PROMPT**:
> Upon submission, an NFT is minted.
> This NFT can then be used when creating a new _Challenge_

3. _Prompt_:
	- **Create**
		- write a prompt to be used for the beginning of a _Challenge_
			- Can be used by the user who created it
			- Can be auctioned in the _Library_
		- When prompt is used in a _Challenge_ User can choose to
			- burn it
			- auction it
	- **Generate**
		- Markov Chain creates a prompt based on the initial filters you assign
			- Choose source from
				- [Project Gutenberg](https://dev.gutenberg.org)
				- Fat Red Bird
			- Enter (up to) 3
				- categories
				- tags
				- authors
					- Or leave blank for random selections
			- Enter `any` to create the start seed
		- Can be
			- used by creator
			- auctioned in the _Library_
		- When prompt is used in a _Challenge_
			- it is automatically burnt
	- forcing some creativity here
		- do not want the same user reusing the same prompt
		- if it is not generated then they are allowed to buy it back
		- shows incentive to reuse as opposed to reusing it because of a lack of action


> **Challenge**
> Upon final completion of the _Challenge_ (when the voting stage has ended). An NFT is created that consists of all challenge information.
>  - prompt
>  - entries
>  - votes
>  - comments
>
>  It is then awarded to the winner of the _Challenge_

4. _Challenge_:
	- **Create**
		- define the basics
			- \# of players
				- invite player
					- challenge will begin when all players accept/deny invite
				- open challenge
					- players join on their own accord
					- challenge will begin when \# of players is reached
			- user order
				- defaults to `random`
			- end criteria (select one)
				- \# of turns / user
				- duration of event
					- each user will have the same amount of time to complete their submission
						- `totalTime/numUsers`
			- choose Prompt
				- select from current NFTs
				- purchase one from _Library_
			- set winning criteria
				- first player to `x` number of votes
				- voting duration
	- **Join**
		- Review the list of _Open Challenges_ and select one to participate in
			- The amount of `INQ` required to join is TBD

##### LIBRARY
An NFT marketplace.
Most items are still TBD, but among them expect to find:
- Skins
	- Paper Types (_changes design of app for user only_)
		- parchment
		- lined
		- graph
		- computer terminal
		- (pseudo) MS Word
- Writing Instruments (_allow users to decorate their submissions_)
	- Pens
	- Pencils
	- Crayons
	- Typewriters
		- All with
			- differing colors
			- differing weights
- Badges (_can be used in user profile page_)
- Stickers (_can be included in many places_)
		- for use
			- user submissions
			- user comments
			- user messages
			- user profile page
				- etc
		- More than likely these can be acquired via the `InqWell`
- Stories
	- A user can save a thread created by the _Choose Your Own Path_ through the _Endless Nest_ as an NFT
- etc
