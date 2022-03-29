'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '❓ Number is must';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('body').style.color = 'rgb(20, 255, 20)';
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.check').style.backgroundColor = 'white';
    document.querySelector('.btn').style.backgroundColor = 'white';
    document.querySelector('.btn').style.borderColor = 'rgb(20, 255, 20)';
    document.querySelector('.guess').style.borderColor = 'rgb(20, 255, 20)';
    document.querySelector('.number').style.backgroundColor = 'white';
    document.querySelector('.number').textContent = number;
    document.querySelector('.check').style.borderColor = 'rgb(20, 255, 20)';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⬇️ Write lower number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('h1').textContent = 'You Lost the Game!';
      document.querySelector('body').style.color = 'red';
      document.querySelector('.message').textContent = '🔃 Retry to win';
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⬆️ Write higher number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('h1').textContent = 'You Lost the Game!';
      document.querySelector('body').style.color = 'red';
      document.querySelector('.message').textContent = '🔃 Retry to win';
      // document.querySelector('.highscore').textContent = '0';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.color = 'rgb(55, 0, 255)';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.check').style.backgroundColor = 'black';
  document.querySelector('.btn').style.backgroundColor = 'black';
  document.querySelector('.btn').style.borderColor = 'rgb(55, 0, 255)';
  document.querySelector('.guess').style.borderColor = 'rgb(55, 0, 255)';
  document.querySelector('.number').style.backgroundColor = 'black';
  document.querySelector('.check').style.borderColor = 'rgb(55, 0, 255)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
 
});
