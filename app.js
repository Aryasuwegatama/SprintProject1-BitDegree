// ===== Silly animal tale from me =====
/* There once was a (describing word) (animal) from(country).
Nobody knew he was a (same animal) because he had (color) fur and ate (number) (plural food) each day.
He like to (action word) and sing (any song title). 
Whenever he was (feeling). he would start speaking (language).
Then he  would feel (feeling)!. 
*/

`use strict`;

alert(`Hi! we are going to tell a silly animal tale but the story is not complete yet.\n you need to answer a few questions to complete the story.`)

// start coding here 
// user question variable input
let questionArray = [
    `Please enter describing word`,
    `Please enter any animal name`,
    `Please enter any country`,
    `Please enter any color`,
    `Please enter amount of number (10-100)`,
    `Please enter plural food`,
    `Please enter action word`,
    `Please enter any song title`,
    `Please enter describing feeling`,
    `Please enter another describing feeling`,
    `Please enter language`,
];

let numberofQuestions = 10;
let questionCounter = 0;

// logic user input

let userInputs = [];
for ( let i = numberofQuestions ; i >= 0 ; i--){        
    let entered = prompt(questionArray[questionCounter] + `\n(${numberofQuestions} questions left)`);
    while (entered === "" || entered === null){
        entered = entered;
    }
    userInputs.push(entered);
questionCounter++;
numberofQuestions--;        
}  

    
    

// original story
let originalStory = `<h2>There once was a ${userInputs[0]} ${userInputs[1]} from ${userInputs[2]}. Nobody knew he was a ${userInputs[1]} because he had ${userInputs[3]} fur and ate ${userInputs[4]} ${userInputs[5]} each day.
He like to ${userInputs[6]} and sing "${userInputs[7]}"!. Whenever he was ${userInputs[8]}, he would start speaking ${userInputs[10]}. Then he  would feel ${userInputs[9]}!.</h2>`;

document.write(originalStory);
console.log(originalStory);


alert(`All Done! Ready for an animal tale? \" but ridiculous hahahahaa\"`)  


