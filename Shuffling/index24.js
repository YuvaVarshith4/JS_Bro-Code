// Fisher-Yates Algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);
console.log(shuffle);
function shuffle(array){
    for(let i = array.length; i > 0; i--){
       const random = Math.floor(Math.random() * (i + 1));
       [array[i], array[random]] = [array[random], array[i]];
    }    
}

// my way 
const shuffled_cards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[random]] = [cards[random], cards[i]];
    }
    return cards;
};
console.log(shuffled_cards(cards));