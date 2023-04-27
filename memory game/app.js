document.addEventListener('DOMContentLoaded', () => {
    
//array with cards images
var cards = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'blank',
        img: 'images/blank.png'
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
        name: 'white',
        img: 'images/white.png'
    }
];

// div class grid
var grid = document.querySelector('.grid');
    
function createBoard(){  
    for (var i = 0; i < cards.length; i++)
    {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i)
        grid.appendChild(card);
    }      
}

createBoard();
    
})