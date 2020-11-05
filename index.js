let firstCard = document.querySelector('.first-card');
let secondCard = document.querySelector('.second-card');
let thirdCard = document.querySelector('.third-card');
let fourthCard = document.querySelector('.fourth-card');
let topCard = document.querySelector('.top');
let points = document.querySelector('.points')
let score = document.querySelector('.score')
let start = document.getElementById('open');
let game = document.getElementById('game')
let counter = document.querySelector('.counter')
let over = document.getElementById('over');
let mySound = document.getElementById('sound')
let shuffledCards 
let shuffledTopCard 


let shuffle = document.querySelector('.shuffle');

let cards = [
    {   name: 'Sabine',
        color : 'blue',
        img : 'images/Sabine-Blue.jpg'
    }, 
    {   name: 'Sabine',
        color: 'red',
        img : 'images/Sabine-Red.jpg'
    },
    {   name: 'Sabine',
        color: 'yellow',
        img : 'images/Sabine-Yellow.jpg'
    },
    {   name: 'Sabine',
        color: 'green',
        img : 'images/Sabine-Green.jpg'
    },
    {   name: 'Peter',
        color: 'blue',
        img : 'images/Peter-Blue.jpg'
    },
    {   name: 'Peter',
        color: 'red',
        img : 'images/Peter-Red.jpg',
    },
    {   name: 'Peter',
        color: 'yellow',
        img : 'images/Peter-Yellow.jpg',
    },
    {   name: 'Peter',
        color: 'green',
        img : 'images/Peter-Green.jpg',
    },
    {   name: 'Michael',
        color: 'blue',
        img : 'images/Michael-Blue.jpg',
    },
    {   name: 'Michael',
        color: 'red',
        img : 'images/Michael-Red.jpg',
    },
    {   name: 'Michael',
        color : 'yellow',
        img : 'images/Michael-Yellow.jpg',
    },
    {   name: 'Michael',
        color: 'green',
        img : 'images/Michael-Green.jpg',
    },
    {   name: 'Noah',
        color: 'blue',
        img:  'images/Noah-Blue.jpg',
    },
    {   name: 'Noah',
        color : 'red',
        img: 'images/Noah-Red.jpg',
    },
    {   name: 'Noah',
        color : 'yellow',
        img: 'images/Noah-Yellow.jpg',
    },
    {   name: 'Noah',
        color: 'green',
        img: 'images/Noah-Green.jpg'
    }
]

//////////////////////START //////////////////////////////////////////


start.addEventListener('click', () => {
    console.log('start card clicked')
     start.style.display = "none"
     game.style.display = "block"
    var thirtySeconds = 30,
    display = document.querySelector('#time');
    startTimer(thirtySeconds, display);
    mySound.play();
    
})

////////////////// SHUFFELE ///////////////////////////////////////////

  
shuffle.addEventListener('click', () => {
    shuffledCards = shuffleCards([...cards])
    shuffledTopCard = shuffleTopCard([...cards])

    firstCard.src = shuffledCards[0].img
    secondCard.src = shuffledCards[1].img
    thirdCard.src = shuffledCards[2].img
    fourthCard.src = shuffledCards[3].img
    topCard.src = [shuffledTopCard][0].img

    //lives
    let lives = Number(points.innerText)
        if (lives > 0){
        lives -- 
        } else if (lives === 0){

        game.style.display = "none";
        over.style.display = "flex";
        mySound.pause();
        }
        points.innerText = lives

})

///////////////////SHUFFLING FUNCTIOOOONS//////////////////////////////////////////////


function shuffleTopCard(cards) {
    let shuffled = [];
    while (cards.length > 0) {
      let random = Math.floor(Math.random() * cards.length);
      shuffled.push(cards[random]);
      cards.splice(random,1);
     
    }
    return shuffled[0]
  }


function shuffleCards(cards) {
    let shuffled = [];
    while (cards.length > 0) {
      let random = Math.floor(Math.random() * cards.length);
      shuffled.push(cards[random]);
      cards.splice(random,1);
    }
    return shuffled.slice(0,4)
  }

  ///////  FIRST CARD /////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////


  firstCard.addEventListener('click', function(){
       
    // console.log(shuffledTopCard.name)
    
    if (shuffledCards[0].name === shuffledTopCard.name || shuffledCards[0].color === shuffledTopCard.color){
        shuffledCards = shuffleCards([...cards])
        shuffledTopCard = shuffleTopCard([...cards])
        firstCard.src = shuffledCards[0].img
        secondCard.src = shuffledCards[1].img
        thirdCard.src = shuffledCards[2].img
        fourthCard.src = shuffledCards[3].img
        topCard.src = [shuffledTopCard][0].img

        let win = Number(score.innerText)
        if (win >= 0 && win < 10){
        win ++
        } else if (win === 10){
            window.open('https://open.spotify.com/artist/44iSvW0fck77wQAmWaDdzm?si=rNCNEId2Tfmv0wZ11sbQGg');
            }
            score.innerText = win
      }
    console.log('first card clicked')
   
    // console.log(typeof(shuffledCards))
})

///////////SECOND CARD /////////////////////////////////////////////////////

secondCard.addEventListener('click', function(event){
   
    // console.log(shuffledCards[1].color)
    
    if (shuffledCards[1].name === shuffledTopCard.name || shuffledCards[1].color === shuffledTopCard.color){
        shuffledCards = shuffleCards([...cards])
        shuffledTopCard = shuffleTopCard([...cards])
        firstCard.src = shuffledCards[0].img
        secondCard.src = shuffledCards[1].img
        thirdCard.src = shuffledCards[2].img
        fourthCard.src = shuffledCards[3].img
        topCard.src = [shuffledTopCard][0].img

        let win = Number(score.innerText)
        if (win >= 0 && win < 10){
        win ++
        } else if (win === 10){
            window.open('https://open.spotify.com/artist/44iSvW0fck77wQAmWaDdzm?si=rNCNEId2Tfmv0wZ11sbQGg');
            }
            score.innerText = win
      }
    console.log('second card clicked')
})

///////////THIRD CARD /////////////////////////////////////////////////////


thirdCard.addEventListener('click', function(){
    
    if (shuffledCards[2].name === shuffledTopCard.name || shuffledCards[2].color === shuffledTopCard.color){
        shuffledCards = shuffleCards([...cards])
        shuffledTopCard = shuffleTopCard([...cards])
        firstCard.src = shuffledCards[0].img
        secondCard.src = shuffledCards[1].img
        thirdCard.src = shuffledCards[2].img
        fourthCard.src = shuffledCards[3].img
        topCard.src = [shuffledTopCard][0].img

        let win = Number(score.innerText)
        if (win >= 0 && win < 10){
        win ++
        } else if (win === 10){
            window.open('https://open.spotify.com/artist/44iSvW0fck77wQAmWaDdzm?si=rNCNEId2Tfmv0wZ11sbQGg');
            }
            score.innerText = win
      }

    console.log('third card clicked')

})

///////////FOURTH CARD /////////////////////////////////////////////////////


fourthCard.addEventListener('click', function(){
    // console.log(shuffledTopCard.name) 
    if (shuffledCards[3].name === shuffledTopCard.name || shuffledCards[3].color=== shuffledTopCard.color){
        shuffledCards = shuffleCards([...cards])
        shuffledTopCard = shuffleTopCard([...cards])
        firstCard.src = shuffledCards[0].img
        secondCard.src = shuffledCards[1].img
        thirdCard.src = shuffledCards[2].img
        fourthCard.src = shuffledCards[3].img
        topCard.src = [shuffledTopCard][0].img

        let win = Number(score.innerText)
        if (win >= 0 && win < 10){
        win ++
        } else if (win === 10){
            window.open('https://open.spotify.com/artist/44iSvW0fck77wQAmWaDdzm?si=rNCNEId2Tfmv0wZ11sbQGg');
            }
            score.innerText = win
      }
    console.log('fourth card clicked')

})


//////////////  TIMER /////////////////


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (timer === 0){
            over.style.display = "flex"
            start.style.display = "none";
            mySound.pause();

            
        }
    }, 1000);
}

 




