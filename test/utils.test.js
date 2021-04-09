// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js';
import { getUser, saveUser } from '../local-storage-utils.js';

const test = QUnit.test;

test('should take in an array and an item and find a match by id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const breakfast = [{ id: 'healthy', item: 'cereal' }, { id: 'lessHealthy', item: 'waffles' }];
    
    const expected = { id: 'lessHealthy', item: 'waffles' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(breakfast, 'lessHealthy');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should set the user into local storage', (expect) => {

    const user = {
        hp: 35,
        gold: 0,
        name: 'wild bill',
        class: 'cowboy',
        completed: {}
    };

    saveUser(user);

    const expected = {
        hp: 35,
        gold: 0,
        name: 'wild bill',
        class: 'cowboy',
        completed: {}
    };
    
    const actual = JSON.parse(localStorage.getItem ('CHARACTER'));

    expect.deepEqual(actual, expected);
});

test('should retrieve user data from local storage', (expect) => {

    const user = {
        hp: 35,
        gold: 0,
        name: 'wild bill',
        class: 'cowboy',
        completed: {}
    };

    saveUser(user);

    const expected = {
        hp: 35,
        gold: 0,
        name: 'wild bill',
        class: 'cowboy',
        completed: {}
    };
    
    const actual = getUser();

    console.log(actual);

    expect.deepEqual(actual, expected);
});
