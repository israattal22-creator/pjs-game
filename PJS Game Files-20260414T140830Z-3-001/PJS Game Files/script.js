const btnroll = document.getElementById('btn--roll');
const btnhold = document.getElementById('btnHold');
const restartbtn = document.getElementById('restart');



const dice = document.getElementById('dice')
const current0 = document.getElementById('current--0')
const score0 = document.getElementById('score--0')

let currentscore = 0;
let totalscore = 0;

let currentplayer = 0;

btnroll.addEventListener('click', ()=>{

    // console.log(math.trunc((math.random()*6)+1))

    let randomNumber = Math.trunc((Math.random()*6)+1);
    console.log(randomNumber)

    if(randomNumber == 1) {

        document.querySelector(`.player--${currentplayer}`).classList.remove('player--active');
         
        currentscore= 0
        document.getElementById(`current--${currentplayer}`).innerText = currentscore

        currentplayer = currentplayer == 0 ? 1 : 0;

        
        document.querySelector(`.player--${currentplayer}`).classList.add('player--active');
    
    }
     else
     {
        
    dice.classList.remove('hidden')
    dice.src = `dice-${randomNumber}.png`

    currentscore = currentscore + randomNumber




    
    dice.classList.remove('hidden')
    dice.src = `dice-${randomNumber}.png`

    currentscore = currentscore + randomNumber
    document.getElementById(`current--${currentplayer}`).innerText = currentscore
     }
});

// btn hold working
btnhold.addEventListener('click' ,()=>{

    totalscore = totalscore + currentscore;
    score0.innerHTML = totalscore
    document.querySelector(`.player--${currentplayer}`).classList.remove('player--active');
         
        currentscore= 0
        document.getElementById(`current--${currentplayer}`).innerText = currentscore

        currentplayer = currentplayer == 0 ? 1 : 0;

        
        document.querySelector(`.player--${currentplayer}`).classList.add('player--active');
    

})