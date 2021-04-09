## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to do things.


## State (local storage)
Initialize HP, Gold, quests completed, name

## Signup page
 - FORM with a button
 - on submit...
    - put the name and class into local storage

## Map page
 - Some div (with background image) to position our links into
 - on load ...
    - if user is dead or finished, redirect them to results page (could check if they finished at the end of each quest page for smoother load to results page)
    - check which quests have been completed
    - disable links for completed quests
    - render links for uncompleted quests
        - links should have the id in the query params

## Quest page
 - Div to put all our quest stuff into
 - on load
    - get the quest object that matches the query parameter
    - use that object to render data to the page
 - on submit
    - use the selected choice (required)
    - update state with new values for HP, gold, and completed
    - replace the form HTML with a description (from the choice object)
    - find a way to redirect the user to the map page

## Results page
 - Div to put all our results stuff into
 - on load ...
    - render results based on current state

## Work list/order
 - Do data modeling. Copy some quest data over.
 - Need a utils (findById, local-storage-utils.js)
 - Do HTML setup. Everything depends on this.
 - We need our user data in local storage
    - That means I should start at the login page
 - We need the basic map page setup so that we have a home for the quests
    - we need links
 - Once we can get to the quest page, build out the quest page
    - Render out quest
    - Update local storage on submit
    - Redirect back to map
 - Now that we have the quest page, we can flesh out the map page
    - Conditionally render links or checkmarks based on completed quests
    - Check if the game is over. If so, redirect page.
