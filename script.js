'use strict';
/* Random Number*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //IF THERE IS NO NUMBER ENTERED

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!!';
  }

  //IF NUMBER IS CORRECT
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👌 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //IF NUMBER IS NOT CORRECT
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤷‍♀️ You lose The Game';
      document.querySelector('.score').textContent = 0;
    }
  }

  /* 
   <----------THIS IS COMMENTED BECAUSE WE NEED TO FOLLOW DRY PRINCIPLE--------->
//IF NUMBER IS TOO HIGH

else if(guess > secretNumber)
{
   if(score>1)
   {
    document.querySelector('.message') .textContent= '📈 Too High!';
    score--;
    document.querySelector('.score') .textContent=score;
   }
   else{
    document.querySelector('.message') .textContent= '🤷‍♀️ You lose The Game';
    document.querySelector('.score') .textContent=0;
   }
}

//IF NUMBER IS TOO LOW

else if(guess < secretNumber)
{
    if(score>1)
    {
    document.querySelector('.message') .textContent= '📉 Too Low!';
    score--;
    document.querySelector('.score') .textContent=score;
    }
    else{
        document.querySelector('.message') .textContent= '🤷‍♀️ You lose The Game';
        document.querySelector('.score') .textContent=0;
       }
}
*/
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
