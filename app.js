// ===== Silly animal tale from me =====
/* There once was a (describing word) (animal) from(country).
Nobody knew he was a (same animal) because he had (color) fur and ate (number) (plural food) each day.
He like to (action word) and sing (any song title). 
Whenever he was (feeling). he would start speaking (language).
Then he  would feel (feeling)!. 
*/

`use strict`;


// start coding here 
// user variable input
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
    `Please enter language`,
];

let numberofQuestions = questionArray.length;
let questionCounter = 0;

// logic 

let userInputs = [];

for ( let i = numberofQuestions ; i >= 0 ; i--){
    // console.log(i);
    // console.log(questionCounter);
    // console.log(questionArray[questionCounter]);
    console.log(questionArray[questionCounter] + `\n(${numberofQuestions} questions left)`)
    questionCounter++;
    numberofQuestions--;
}



// original story
    // let originalStory = `There once was a ${userInputs[0]} ${userInputs[1]} from ${userInputs[2]}.
    // Nobody knew he was a ${userInputs[1]} because he had ${userInputs[3]} fur and ate ${userInputs[4]} ${userInputs[5]} each day.
    // He like to ${userInputs[6]} and sing ${userInputs[7]}. 
    // Whenever he was ${userInputs[8]}. he would start speaking ${userInputs[9]}.
    // Then he  would feel ${userInputs[8]}!.`;
    // prompt(userInputs);
    // console.log(originalStory);