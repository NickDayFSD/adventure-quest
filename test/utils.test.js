// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, questResult } from '../utils.js';
import { getUser, saveUser } from '../local-storage-utils.js';

const test = QUnit.test;

test('should take in an array and an item and find a match by id', (expect) => {

    const breakfast = [{ id: 'healthy', item: 'cereal' }, { id: 'lessHealthy', item: 'waffles' }];
    
    const expected = { id: 'lessHealthy', item: 'waffles' };
    
    const actual = findById(breakfast, 'lessHealthy');

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

/*test('This test should update a user health and gold', (expect) => {
    
    const user = {
        hp: 35,
        gold: 0,
        name: 'wild bill',
        class: 'cowboy',
        completed: {}
    };

    const whip = {
        health: -20,
        gold: 40
    }

    const questId = 'cattleDrive';

    const expected = {
        hp: 20,
        gold: 40,
        name: 'wild bill',
        class: 'cowboy',
        completed: {cattleDrive}
    };
    
    const actual = questResult(whip, cattleDrive, user);

    console.log(actual);

    expect.deepEqual(actual, expected);
});*/