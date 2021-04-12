// import functions and grab DOM elements
import { saveUser } from './local-storage-utils.js';
import { makeUser } from './make-user.js'

// initialize state
const userSelection = document.getElementById('user-options');

// set event listeners to update state and DOM
userSelection.addEventListener('submit', function (event) {

    event.preventDefault();
    // make a new form data object
    const formData = new FormData(userSelection);
    // use the form data object to make a user
    const user = makeUser(formData);
    // pop that user in local storage
    saveUser(user);
    // redirect us to the map page
    window.location = './map/index.html';
})
