'use strict';

// let userName = prompt('Hey, What is your name?');

// alert('Welcome ' + userName);










// let firstQustion = prompt('Do you think I am above 25?');

// switch (firstQustion.toLowerCase()) {
//     case 'yes':
//         case 'y':
//         // console.log('I am under 25')
//         alert('False I am under 25')
//         break;

//     case 'no':
//         case 'n':
//         // console.log('true I am 24')
//         alert('True I am 24')
//         break;

//     default:
//         // console.log('only answer with yes or no')
//         alert('Answer only with yes or no')
//         break;
// }


// let secondQustion = prompt('Do you think that i have a cat?');

// switch (secondQustion.toLowerCase()) {
//     case 'yes':
//         case 'y':
//         // console.log('false I dont like to have a pet');
//         alert('False I dont pets');
//         break;

//     case 'no':
//         case 'n':
//         // console.log('benar saya tidak suka kucing');
//         alert('True i dont like pets');
//         break;

//     default:
//         // console.log('only answer with yes or no')
//         alert('Answer only with yes or no')
//         break;
// }


// let thirdQustion = prompt('Can you see me?');

// switch (thirdQustion.toLocaleLowerCase()) {
//     case 'no':
//         case 'n':
//         // console.log('True you cant see me haha');
//         alert('True you cant see me');
//         break;

//     case 'yes':
//         case 'y':
//         // console.log('Woow you have a superpower');
//         alert('Woow you have a superpower');
//         break;

//         default:
//             alert('Only answer with yes or no');
//             break;
// }


// let fourthQustion = prompt('Do you think I can swim?');

// switch(fourthQustion.toLocaleLowerCase()){
//     case 'yes':
//         case 'y':
//         // console.log('False! I cant swim');
//         alert('False! I cant swim');
//         break;

//         case'no':
//         case 'n':
//         // console.log('True! I cant swim');
//         alert('True! I cant swim');
//         break;

//         default:
//             // console.log('ONLY ANSWER WITH YES OR NO');
//             alert('ONLY ANSWER WITH YES OR NO');
//             break;
// }


// let fifthQustion = prompt('Do you think I can draw ?');

// switch(fifthQustion.toLocaleLowerCase()){
//     case 'yes':
//         case 'y':
//         // console.log('True! I love drawing');
//         alert('True! I love drawing');
//         break;

//         case'no':
//         case 'n':
//         // console.log('false! i love drawing');
//         alert('False! i love drawing');
//         break;

//         default:
//             // console.log('ONLY ANSWER WITH YES OR NO');
//             alert('ONLY ANSWER WITH YES OR NO');
//             break;

// }



let numGuess = prompt('Guess my favorite number');

// score=0;

if (numGuess > 6) {
    alert('thats too high');

} else if (numGuess < 6) {
    alert('thats too low');

} else {
    alert('Great! 6 is the correct number');
    // score++;
}


for (let i = 0; i <= 2; i++) {

    if (numGuess > 6 || numGuess < 6) {
        prompt('Guess my favorite number again');
    }else if(i === 1){ 
        alert('The correct number is 6');
 }else {
        break;
    }
    
    console.log(i);
}



// alert('The correct numer is 6');

// let hobbyQustion=prompt{'what is my faveorite hobby? drawing,singing,reading,dancing,skating,coding,eating,driving'};
// let myHobby=['drawing','singing','reading','dancing','skating','coding'];


// for (let i = 0 ; i <=6 ; i++ ) {
    
    
// }









