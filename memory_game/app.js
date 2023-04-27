document.addEventListener('DOMContentLoaded', () => {
    
//array with cards images
var cards = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'vegehotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'vegehotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];
 
cards.sort(() => 0.5 - Math.random())

// div class grid
var grid = document.querySelector('.grid');
let chosenCards = []
    
function createBoard(){  
    for (var i = 0; i < cards.length; i++)
    {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }      
}

    
function flipCard() {
    let cardId = this.getAttribute('id')
    this.setAttribute('src', cards[cardId].img)
    chosenCards.push(cardId)
    if (chosenCards.length === 2) {
      setTimeout(checkMatch, 500)
    }
}
    

function checkMatch() {
    
    var cardsInGrid = document.querySelectorAll('img')
    
    var card0 = chosenCards[0]
    var card1 = chosenCards[1]
    
    
    if (cards[card0].name == cards[card1].name){
        cardsInGrid[card0].removeEventListener('click', flipCard)
        cardsInGrid[card1].removeEventListener('click', flipCard)
    }
    else {
        cardsInGrid[card0].setAttribute('src', 'images/blank.png')
        cardsInGrid[card1].setAttribute('src', 'images/blank.png')
    }
    
    chosenCards =[]
}

    
    
createBoard();
    
})