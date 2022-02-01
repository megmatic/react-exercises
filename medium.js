// Create a class Card. A card object will have 2 properties:

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getImageUrl() {
        console.log(`'images/${this.rank}_of_${this.suit}'`)
    }
}

class Hand {
    constructor() {
        this.hand = []
        this.totalPoints = 0
    }
    addCard(Card) {
        this.hand.push(Card)
        switch (Card.rank) {
            case 1:
                Card.rankName = "ace";
                Card.points = 11;
                break;
            case 11:
                Card.rankName = "jack";
                Card.points = 10;
                break;
            case 12:
                Card.rankName = "queen";
                Card.points = 10;
                break;
            case 13:
                Card.rankName = "king";
                Card.points = 10;
                break
            default:
                Card.rankName = Card.rank;
                Card.points = Card.rank;
        }
        this.totalPoints += Card.points
    }
    getPoints() {
        console.log(this.totalPoints);
    }
}

class Deck {
    constructor() {
        this.deck = []
        for(let i=1; i <= 13; i++) {
            this.deck.push({rank: i, suit: 'hearts'})
        }
        for(let i=1; i <= 13; i++) {
          this.deck.push({rank: i, suit: 'spades'})
        }
        for(let i=1; i <= 13; i++) {
            this.deck.push({rank: i, suit: 'diamonds'})
        }
        for(let i=1; i <= 13; i++) {
            this.deck.push({rank: i, suit: 'clubs'})
        }
    }
    draw() {
        console.log(this.deck.splice(Math.floor(Math.random()*this.deck.length), 1).pop());
    }
    shuffle() {
        let count = this.deck.length;
        while(count) {
            this.deck.push(this.deck.splice(Math.floor(Math.random() * count), 1) [0])
            count -= 1;
        }
    }
    numCardsLeft() {
        console.log(this.deck.length)
    }
}

let myCard = new Card(5, 'diamonds')

console.log(myCard.rank)
console.log(myCard.suit)
console.log(myCard.getImageUrl())

const myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()

let myDeck = new Deck()
myDeck.draw()
myDeck.draw()
myDeck.shuffle()
myDeck.numCardsLeft()