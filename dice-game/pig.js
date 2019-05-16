var scores,roundscore,currentplayer,gamePlaying;

 init();



document.querySelector('.btn-roll').addEventListener('click', function()  {
 
    if(gamePlaying)
    {
      var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    diceDOM.src = "dice-" + dice + ".png";

    if(dice !== 1)
    {
        roundscore += dice;
        document.querySelector('#current-' + currentplayer).textContent = roundscore;
    }
    else
    {
      changePlayer();
    }

    }

});

 document.querySelector('.btn-hold').addEventListener('click', function()
 {
    if(gamePlaying)
    {
      scores[currentplayer] += roundscore;
    
    document.querySelector('#score-' + currentplayer).textContent = scores[currentplayer];
     
    if(scores[currentplayer] >= 100)
    {
      document.querySelector('#name-' + currentplayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = "none";

      document.querySelector('.player-' + currentplayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + currentplayer + '-panel').classList.remove('active');

      gamePlaying = false;
      }
    else
    {
      changePlayer();
    }
    }
 });

 function changePlayer()
 {
  currentplayer === 0 ? currentplayer = 1 : currentplayer = 0;
  roundscore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

 } 






 
 document.querySelector('.btn-new').addEventListener('click', init);
 
  function init()
 {
   scores = [0, 0];
 currentplayer = 0;
 roundscore = 0;
 gamePlaying = true;
 
 
 document.querySelector('.dice').style.display = "none";
 
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.getElementById('name-0').textContent = 'player 1';
 document.getElementById('name-1').textContent = 'player 2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
 }

 