class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
}
  
class Deck {
    constructor() {
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      this.cards = [];
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal(numCards) {
      return this.cards.splice(0, numCards);
    }
}
  
class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    playCard() {
      return this.hand.shift();
    }
  
    addCard(card) {
      this.hand.push(card);
    }
}
  
function playWar(player1, player2) {
    const deck = new Deck();
    deck.shuffle();
    player1.hand = deck.deal(26);
    player2.hand = deck.deal(26);
  
    while (player1.hand.length > 0 && player2.hand.length > 0) {
      let card1 = player1.playCard();
      let card2 = player2.playCard();
      console.log(`${player1.name} plays ${card1.rank} of ${card1.suit}`);
      console.log(`${player2.name} plays ${card2.rank} of ${card2.suit}`);
      if (card1.rank > card2.rank) {
        player1.score++;
        console.log(`${player1.name} wins this round`);
      } else if (card2.rank > card1.rank) {
        player2.score++;
        console.log(`${player2.name} wins this round`);
      } else {
        console.log("It's a tie");
      }
    }
  
    console.log(`${player1.name} has ${player1.score} points`);
    console.log(`${player2.name} has ${player2.score} points`);
    if (player1.score > player2.score) {
      console.log(`${player1.name} wins the game!`);
    } else if (player2.score > player1.score) {
      console.log(`${player2.name} wins the game!`);
   
    }

  }
   
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");
  playWar(player1, player2);
  