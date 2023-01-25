'use strict';
// //document.querySelector= To select the classes or ids from the HTML
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number !'

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=12;

// document.querySelector('.guess').value=23; 
// console.log(document.querySelector('.guess').value);
// document.querySelector('.agian').addEventListener('click', function(){




let secretNumber = Math.trunc(Math.random() * 20) +1;

let score=20;
let highscore=0;

const displayMessage  = function(message){
    document.querySelector('.message').textContent= message;
};


document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

// when there is no input

if(!guess){
    //document.querySelector('.message').textContent= 'No Number !';
    displayMessage(' no number !');
 
    // when player win the game
 }else if(guess === secretNumber){
     //document.querySelector('.message').textContent='corect number !' ;
     displayMessage('correct number !');
    
     document.querySelector('.number').textContent=secretNumber;

     document.querySelector('body').style.backgroundColor='#60b347';

     document.querySelector('.number').style.width='30rem';
     if (score > highscore){
         highscore=score;
         document.querySelector('.highscore').textContent=highscore;
     }
     //when guess is wrong
    }else if(guess !== secretNumber){
        if (score>1){
           // document.querySelector('.message').textContent= guess >   secretNumber ? 'too hight !': 'too low !';
           displayMessage(guess > secretNumber ? 'Too High !' : 'Too low !');

            score--;
            document.querySelector('.score').textContent= score;
        }
        else {
            //document.querySelector('.message').textContent='you lost the game !';
            displayMessage('you lost the game !')
            document.querySelector('.score').textContent=0;
        }

    }


//  }else if(guess > secretNumber ){
//     if (score>1){
//         document.querySelector('.message').textContent='too hight !';
//         score--;
//         document.querySelector('.score').textConten=score;


//     }
//     else {
//         document.querySelector('.message').textContent='you lost the game !';
//         document.querySelector('.score').textContent=0;
//     }

    
//  }
//  else if(guess<secretNumber){
//      if(score<1){
//         document.querySelector('.message').textContent='too low !';
//         score--;
//         document.querySelector('.score').textContent=score;

//      }else {
//          document.querySelector('.message').textContent='you lost the game';
//          document.querySelector('.score').textContent=0 ;
//      }
     
//  }

});
  
 // reset setting
  document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
  
  //document.querySelector('.message').textContent='Start guessing...';
  displayMessage('start guessing ......')

  document.querySelector('.score').textContent=score;

  document.querySelector('.guess').value= ' ';

  document.querySelector('body').style.backgroundColor='#222';

  document.querySelector('.number').style.width='15rem';
  
  document.querySelector('.number').textContent='?';

  
});


// });

