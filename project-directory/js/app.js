'use strict';

let userName = prompt('Hey, What is your name?');

alert('Welcome ' + userName);










let firstQustion = prompt('Do you think I am above 25?');

switch (firstQustion.toLowerCase()) {
    case 'yes':
        // console.log('I am under 25')
        alert('False I am under 25')
        break;

    case 'no':
        // console.log('true I am 24')
        alert('True I am 24')
        break;

    default:
        // console.log('only answer with yes or no')
        alert('Answer only with yes or no')
        break;
}


let secondQustion = prompt('Do you think that i have a cat?');

switch (secondQustion.toLowerCase()) {
    case 'yes':
        // console.log('false I dont like to have a pet');
        alert('False I dont pets');
        break;

    case 'no':
        // console.log('benar saya tidak suka kucing');
        alert('True i dont like pets');
        break;

    default:
        // console.log('only answer with yes or no')
        alert('Answer only with yes or no')
        break;
}


let thirdQustion = prompt('Can you see me?');

switch (thirdQustion.toLocaleLowerCase()) {
    case 'no':
        // console.log('True you cant see me haha');
        alert('True you cant see me');
        break;

    case 'yes':
        // console.log('Woow you have a superpower');
        alert('Woow you have a superpower');
        break;

        default:
            alert('Only answer with yes or no');
            break;
}


let fourthQustion = prompt('Do you think I can swim?');

switch(fourthQustion.toLocaleLowerCase()){
    case 'yes':
        // console.log('False! I cant swim');
        alert('False! I cant swim');
        break;

        case'no':
        // console.log('True! I cant swim');
        alert('True! I cant swim');
        break;

        default:
            // console.log('ONLY ANSWER WITH YES OR NO');
            alert('ONLY ANSWER WITH YES OR NO');
            break;
}


let fifthQustion = prompt('Do you think I can draw ?');

switch(fifthQustion.toLocaleLowerCase()){
    case 'yes':
        // console.log('True! I love drawing');
        alert('True! I love drawing');
        break;

        case'no':
        // console.log('false! i love drawing');
        alert('False! i love drawing');
        break;

        default:
            // console.log('ONLY ANSWER WITH YES OR NO');
            alert('ONLY ANSWER WITH YES OR NO');
            break;
    
}



