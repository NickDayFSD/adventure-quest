// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js'

const test = QUnit.test;

test('should take in an array and an item and find a match by id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const breakfast = [{id: 'healthy', item: 'cereal'},{id: 'lessHealthy', item: 'waffles'}]
    
    const expected = {id: 'lessHealthy', item: 'waffles'};
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(breakfast, 'lessHealthy');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
