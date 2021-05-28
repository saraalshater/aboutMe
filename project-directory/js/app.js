'use strict';



let userName = prompt('Hey, What is your name?');

while (!userName) {
    userName = prompt('please write something');
}

alert('Welcome ' + userName);






let score = 0;
// ------------------------------------------------------Question1----------------------------------------------

function question1() {

    let firstQustion = prompt('Do you think I am above 25?');

    firstQustion = firstQustion.toLowerCase()

    if (firstQustion === 'yes' || firstQustion === 'y') {

        alert('False I am under 25')
    } else if (firstQustion === 'no' || firstQustion === 'n') {


        alert('True I am 24')
        score++;
    } else {

        alert('Answer only with yes or no')

    }

}
question1();

// ------------------------------------------------------Question2----------------------------------------------


function question2() {
    let secondQustion = prompt('Do you think that i have a cat?');

    secondQustion = secondQustion.toLowerCase()


    if (secondQustion === 'yes' || secondQustion === 'y') {

        alert('False I dont pets');
    } else if (secondQustion === 'no' || secondQustion === 'n') {


        alert('True i dont like pets');
        score++;
    } else {

        alert('Answer only with yes or no')


    }
}


question2();


// ------------------------------------------------------Question3----------------------------------------------


function question3() {
    let thirdQustion = prompt('Do you think i like chips');

    thirdQustion = thirdQustion.toLocaleLowerCase();

    if (thirdQustion === 'no' || thirdQustion === 'n') {

        alert('True i dont eat chips');
        score++;
    } else if (thirdQustion === 'yes' || thirdQustion === 'y') {


        alert('false i dont eat chips');

    } else {

        alert('Only answer with yes or no');

    }
}
question3();

// ------------------------------------------------------Question4----------------------------------------------

function question4() {

    let fourthQustion = prompt('Do you think I can swim?');

    fourthQustion = fourthQustion.toLocaleLowerCase()

    if (fourthQustion === 'yes' || fourthQustion === 'y') {


        alert('False! I cant swim');
    } else if (fourthQustion === 'no' || fourthQustion === 'n') {



        alert('True! I cant swim');
        score++;
    } else {

        alert('ONLY ANSWER WITH YES OR NO');
    }
}
question4();

// ------------------------------------------------------Question5----------------------------------------------

function question5() {

    let fifthQustion = prompt('Do you think I can draw ?');

    fifthQustion = fifthQustion.toLocaleLowerCase()

    if (fifthQustion === 'yes' || fifthQustion === 'y') {

        alert('True! I love drawing');
        score++;
    } else if (fifthQustion === 'no' || fifthQustion === 'n') {


        alert('False! i love drawing');
    } else {


        alert('ONLY ANSWER WITH YES OR NO');
    }
}
question5();

alert(userName +' your score is ' + score +'/5'); 

// ------------------------------------------------------Question6----------------------------------------------

// function question6() {

//     let numGuess = prompt('Guess my favorite number');

    
//     for (let i = 0; i < 3; i++) {

//         if (numGuess > 6) {
//             alert('thats too high');

//         } else if (numGuess < 6) {
//             alert('thats too low');

//         } else {
//             alert('Great! 6 is the correct number');
        
//         }
//     }



//     for (let i = 0; i <= 2; i++) {

//         if (numGuess > 6 || numGuess < 6) {
//             prompt('Guess my favorite number again');
//         } else if (i === 1) {
//             alert('The correct number is 6');
//         } else {
//             break;
//         }

//         console.log(i);
//     }



//     alert('The correct numer is 6');
// }
// question6();

// // function question7(){
// // let hobbyQustion=prompt{'what is my faveorite hobby? drawing,singing,reading,dancing,skating,coding,eating,driving'};
// // let myHobby=['drawing','singing','reading','dancing','skating','coding'];


// // // for (let i = 0 ; i <=6 ; i++ ) {


// // // }
// // }
// // question7();








