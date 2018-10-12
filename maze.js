window.onload = function() {
  // const firstBound = document.getElementById('boundary1');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');
  const boundaries = document.querySelectorAll('div.boundary');
  const status = document.querySelector('h2#status');
  const maze = document.getElementById('maze');

  
  // firstBound.addEventListener('mouseover', handleMouseOver);
  boundaries.forEach(b => b.addEventListener('mouseover', handleMouseOver));
  end.addEventListener('mouseover', didWin);

  start.addEventListener('click', e => {
    boundaries.forEach(b => {
      if (b.classList.contains('youlose'))
        b.classList.remove('youlose');
      status.innerHTML = 'Move your mouse over the "S" to begin.'
    });
  });

  maze.addEventListener('mouseleave', e => {
    console.log(e);
    makeRed();
    status.innerHTML = 'You lose because you cheated';
  });

  function handleMouseOver(e) {
    if (e.target.classList.contains('example')) {

    } else {
        e.target.classList.add('youlose');
    }
      
  }

  function didWin(e) {
    let count = 0;
    boundaries.forEach( b => {
      if (b.classList.contains('youlose'))
        count += 1;
    });
    
    if (count == 0) {
      status.innerHTML = 'You Win';
    } else {
      status.innerHTML = "You Lose";
    }   
  }

  function makeRed(e) {
    boundaries.forEach( b => {
      b.classList.add('youlose');
    });
  }

};
