const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020=04-22', passed: true}
]

function addSubmission(array, newName, newScore, newDate) {
    let newSub = { 
        name: newName, score: newScore, date: newDate, passed: newScore >=60
    }
    array.push(newSub);
}

function deleteSubmissionByIndex(array, index) { 
    array.splice(index, 1);
} 

function deleteSubmissionByName(array, name) {
    array.forEach((object, index) => {     
        // looking at each object in the array, keeping track of index
        if (object.name === name) {  
            // looping through the array, if the name in the array matches the name being called 
            array.splice(index, 1); 
            // will go to and remove that index that matches the name
        }
    });
}

function editSubmission(array, index, score) {
    // update objects score at the specified index
// use conditional statements to set the value for passed property to true if the score is greater or equal to 60, and false otherwise
    array[index].score = score;
    // the objects score is equal to score being called
    array[index].passed = score >= 60;
    // if that score is greater than 60, it is passed as true
}

function findSubmissionByName(array, name) {
    // return the object in the array that has the provided name 
    // use find method
    return array.find(array => array.name === name);
}

function findLowestScore(array) { 
    // return object in the array that has the lowest score
    // use for each method to loop through whole array
    let lowestScore = array[0];
    array.forEach((object) => { 
        // look at each object in the array
        // setting lowest score to first score in array
        if (object.score < lowestScore.score) { 
            // comparing scores in array to lowest score set above
            lowestScore = object;
            // replacing lowest score to the object with lowest score
        }
    });
    return lowestScore;
}

function findAverageScore(array) {
    // use for of loop to return average quiz score
    let arraySize = array.length;
    // getting how many objects are in the array
    let total = 0;
    // setting the total to 0
    for (const item of array) {
        total = item.score + total
        // setting new total to total plus score 
        // loops through the whole array to add previous score to next score
    }
    return total / arraySize;
    // returning sum of the total and divide by number of objects (the array length)
    
}
function filterPassing(array) { 
    // return a new array using the filter method
    // filer method should find objects in the array that have passing scores
    let newArray = array.filter(item => item.passing === true);
    // holds every object that has a passing of true
    return newArray;
}

function filter90AndAbove(array) { 
    //return a new array using the filter method
    // filter method should find objects in the array that have high scores greater than or equal to 90
    let newArray = array.filter(item => item.score >= 90);
    return newArray;
}


addSubmission(submissions, 'Jolene', 99, '2019-10-31');
addSubmission(submissions, 'June', 39, '2018-03-19');
console.log(submissions);

deleteSubmissionByIndex(submissions, 3);
console.log(submissions);
// removed Jill

deleteSubmissionByName(submissions, 'Joe');
console.log(submissions);
// removed Joe

editSubmission(submissions, 2, 70);
console.log(submissions);
// edits Jolene's score

console.log(findSubmissionByName(submissions, 'Jolene'));

console.log(findLowestScore(submissions));
// John has the lowest score

console.log(findAverageScore(submissions));

console.log(filter90AndAbove(submissions));