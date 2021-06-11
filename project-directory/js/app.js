'use strict';



let userName = prompt('Hey, What is your name?');

while (!userName) {
  userName = prompt('please write something');
}

alert('Welcome ' + userName);






let score = 0;
// // ------------------------------------------------------Question1----------------------------------------------

function question1() {

  let firstQustion = prompt('Do you think I am above 25?');

  firstQustion = firstQustion.toLowerCase();

  if (firstQustion === 'yes' || firstQustion === 'y') {

    alert('False I am under 25');
  } else if (firstQustion === 'no' || firstQustion === 'n') {


    alert('True I am 24');
    score++;
  } else {

    alert('Answer only with yes or no');

  }

}
question1();

// // ------------------------------------------------------Question2----------------------------------------------


function question2() {
  let secondQustion = prompt('Do you think that i have a cat?');

  secondQustion = secondQustion.toLowerCase();


  if (secondQustion === 'yes' || secondQustion === 'y') {

    alert('False I dont pets');
  } else if (secondQustion === 'no' || secondQustion === 'n') {


    alert('True i dont like pets');
    score++;
  } else {

    alert('Answer only with yes or no');


  }
}


question2();


// // ------------------------------------------------------Question3----------------------------------------------


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

// // ------------------------------------------------------Question4----------------------------------------------

function question4() {

  let fourthQustion = prompt('Do you think I can swim?');

  fourthQustion = fourthQustion.toLocaleLowerCase();

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

  fifthQustion = fifthQustion.toLocaleLowerCase();

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

function question6() {

  for (let i = 0; i < 4; i++) {

    let numGuess = Number(prompt('Guess my favorite number'));

    if (numGuess < 6) {

      alert('thats too low');

    } else if (numGuess > 6) {

      alert('thats too high');

    } else if (numGuess === 6) {

      alert('great the number is 6');
      score++;
      break;


    } else {
      alert('please answer with a number');

    }

    if (i === 3) {
      alert('the right number is 6');

    }

  }

}

question6();

// ------------------------------------------------------Question7----------------------------------------------

function question7() {

  let myHobby = ['drawing', 'photography', 'reading', 'skating'];


  loop1: for (let i = 0; i < 6; i++) {
    let j = '';
    let hobbyQustion = prompt('what is my faveorite hobby? drawing,photography,reading,dancing,skating,coding,driving');

    for (let j = 0; j < myHobby.length; j++) {

      console.log(myHobby[j]);

      if (hobbyQustion === myHobby[j]) {

        alert('Correct that is one of my hobbies');
        score++;
        break loop1;
      }
    }
    if (hobbyQustion !== myHobby[j]) {
      alert('wrong');
    }

  }
}



question7();

alert(userName + ' your score is ' + score + '/7');








