let board = document.querySelector('#board');
let shells = Array.from(document.querySelectorAll('#board > div'));
let button = document.querySelector('button');
let rnd = Math.floor(Math.random() * 3);
let tries = 0;
let wins = 0;

button.addEventListener('click', function(){
  for(let i = 0; i < shells.length; i++){
    shells[i].className = '';
  }
  rnd = Math.floor(Math.random() * 3);
});

board.addEventListener('click', function(ev){
  let target = ev.target;
  if(target.id === ''){
    for(let i = 0; i < shells.length; i ++){
      if(shells[i].className !== ''){
        alert('you need to reset!')
        return;
      }
    }
    let idx = shells.indexOf(target);
    tries = tries + 1;
    if(idx === rnd){
      target.className = 'green';
      wins = wins + 1;
    }
    else {
      target.className = 'red';
    }
    console.log(wins / tries )
  }
});

setInterval(function(){
  let guess = Math.floor(Math.random()*3);
  shells[guess].click();
  setTimeout(function(){
    button.click();
  }, 100);
}, 200)