class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
      // This portion of the code has a class called Card and has a contructor method that takes in two paramaters
      // rank and suit!! and then assighns them to properties with the same name! 
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
          // This portion of the code has a class called Deck with a constructor method that as an emopty array called cards :)
          // and it assighns cards to the object cards property! Then theres to contant arrays ranks and suits
          // that have the deck of playing cards! There's also nested loops to iterate throught the suits and ranks array
          // and then creates new card objects using the using the Card class constructor method and passing in the current rank and suit as arguments
          // The new card objects are then pushed to the cards array resulting in a complete deck of cards!
        }
      }
    }
    
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
      // This portion of the code has a method shuffle that iterates backwards through the cards array!
      // starting with the last index! -1 and ending at index 0! The iteration, the methods
      // select a random index between 0 and the current loop index using Math.floor!
      // It then swaps the element at the current index with a random selected index. 
      //Its almost like its shuffling!! but not really you know so the order is random!

    }
  
    deal(numCards) {
      return this.cards.splice(0, numCards);
      // This portion of the code has a deal method with the paramater numCards.
      // It is the numberof cards that someone wants to deal! 
    }
}
  
class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
      // This portion of the code has a class caled Player with a constructor method that takes in one paramater name!
      // The constructor also takes 2 empty properties hand and score! 
      // They represent the cards the player is golding and their correspoding score
      // The hand propety is an empty array that will be used to store the cards dealt to the player
      // and the score propety is set to 0 and will be used to keep track 
      // of the players score!
    }
  
    playCard() {
      return this.hand.shift();
      // This portion of the code has a playcard method that uses array.prototye.shift
      // It remove and return the first element of the "hand" property!
      // Represents a card being played by the player! Kind of like they're playing by hand
    }
  
    addCard(card) {
      this.hand.push(card);
      // This portion of the code takes a paramater card and uses thes same type to add it to the hand property array represrnying the action of the player receiving 
      // a new card! Kind of like they're being dealt a card! ;)
    }
    // These two portions playcard and addcard work together to have a player play a card and add a card from their hand
}
  
function playWar(player1, player2) {
    const deck = new Deck();
    deck.shuffle();
    player1.hand = deck.deal(26);
    player2.hand = deck.deal(26);
    // This portion of the code is definining a function called playWar which takes in two
    // paramaters play 1 and 2!
    // It creates a new instance of the deck class and assighns it to a variable called deck!
    // and calls the shuffle method of the deck class! It assighns the first 26 cards
    // to the hand property of player one and then to the second hand to player 2!
    // kind of like passing it evenly!
  
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
      // This portion of the code is a while loop that simulates a card game between two players!
      // The loop goes on until both players have card in their hand
      // Inside the loop the code has one card from each player using the playCard functiom
      // The next part of the code compares the rank of the two card to determine the winner of the round
      // If card1 has more then player one wins! vice versa patato patata
      // but if they have the same? Well then its a tie! No score!
    }
  
    console.log(`${player1.name} has ${player1.score} points`);
    console.log(`${player2.name} has ${player2.score} points`);
    if (player1.score > player2.score) {
      console.log(`${player1.name} wins the game!`);
    } else if (player2.score > player1.score) {
      console.log(`${player2.name} wins the game!`);
   // This portion of the code is checking the final scores to see who wins the whole game!
   // It comapres the scores from the game and previous round! It prints the plater of who won the game!

    }

  }
   
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");
  playWar(player1, player2);
 // This portion of the code creates two instances of player and assighns them to the variable
 // player 1 and 2! Then the function playwar is called! and passed the two player instances as arguments
 // This triggers the fame to start! Let the games BEGIN :)