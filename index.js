let firstCard = document.querySelector('.first-card');
let secondCard = document.querySelector('.second-card');
let thirdCard = document.querySelector('.third-card');
let fourthCard = document.querySelector('.fourth-card');
let topCard = document.querySelector('.top');
let points = document.querySelector('.points').textContent;



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
        img : 'images/Peter-blue.jpg'
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


  
shuffle.addEventListener('click', () => {
    let shuffledCards = shuffleCards([...cards])
    let shuffledTopCard = shuffleTopCard([...cards])
    firstCard.src = shuffledCards[0].img
    secondCard.src = shuffledCards[1].img
    thirdCard.src = shuffledCards[2].img
    fourthCard.src = shuffledCards[3].img
    topCard.src = [shuffledTopCard][0].img
    console.log(topCard)
     // console.log(firstCard)
    
})  

// 


function shuffleTopCard(cards) {
    let shuffled = [];
    while (cards.length > 0) {
      let random = Math.floor(Math.random() * cards.length);
      shuffled.push(cards[random]);
      cards.splice(random,1);
    }
    return shuffled[0]
  }

  console.log(shuffleTopCard([...cards]))


function shuffleCards(cards) {
    let shuffled = [];
    while (cards.length > 0) {
      let random = Math.floor(Math.random() * cards.length);
      shuffled.push(cards[random]);
      cards.splice(random,1);
    }
    return shuffled.slice(0,4)
  }



// let state = {
//     firstCard : false,
//     secondCard : false,
//     thirdCard : false,
//     fourthCard : false
// }

// function showCards(){
//     document.querySelector('#myCards').forEach(card =>{
//         if(state.firstCard){
//             card.
//         }
//     })
// }


// function renderPepperoni() {
//     document.querySelectorAll('.pep').forEach(onePep => {
//       if (state.pepperoni) {
//         onePep.style.visibility = 'visible';
//       } else {
//         onePep.style.visibility = 'hidden';
//       }
//     });
//   }









// console.log(cards[1].name);


 
//   shuffleCards(cards)





// firstCard.addEventListener('click', function(){
//     console.log('first card clicked')
// })


// secondCard.addEventListener('click', function(){
//     console.log('second card clicked')
// })

// thirdCard.addEventListener('click', function(){
//     console.log('third card clicked')

// })

// fourthCard.addEventListener('click', function(){
//     console.log('fourth card clicked')

// })

  //











  
  
//   const cards = [1,2,3,4,5,6,7,8]
  
//   const shuffleCards = shuffleCards(cards)
  
//   shuffleCards(cards).slice(0,4)
  
//   console.log(shuffleCards.slice(0,-4))const cards = [1,2,3,4,5,6,7,8]


// function shuffleCards(cards) {
//     let shuffled = [];
//     while (cards.length > 0) {
//       let random = Math.floor(Math.random() * cards.length);
//       shuffled.push(cards[random]);
//       cards.splice(random,1);
//     }
//     return shuffled
//   }
  
  
//   const cards = [1,2,3,4,5,6,7,8]
  
//   const shuffleCards = shuffleCards(cards)
  
//   shuffleCards(cards).slice(0,4)
  
//   console.log(shuffleCards.slice(0,-4))






