/* 
利用构造函数创建一幅扑克牌
*/
function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}
Card.prototype.toString = function () {
  if (this.rank === 14) {
    return "Joker";
  } else if (this.rank === 15) {
    return "JOKER";
  } else {
    const suitArr = ["♠", "♥", "♣", "♦"];
    const rankArr = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    return suitArr[this.suit - 1] + rankArr[this.rank - 1];
  }
};
Card.prototype.print = function () {
  console.log(this);
};

function Deck() {
  this.cards = [];

  for (let suit = 1; suit <= 4; suit++) {
    for (let rank = 1; rank <= 13; rank++) {
      this.cards.push(new Card(rank, suit));
    }
  }
  this.cards.push(new Card(14));
  this.cards.push(new Card(15));

  //   this.shuffle = function () {
  //     for (let i = this.cards.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  //     }
  //   };
  //   this.deal = function () {
  //     this.shuffle();
  //     return this.cards.shift();
  //   };
}
Deck.prototype.toString = function () {
  return this.cards.join(", ");
};
Deck.prototype.print = function () {
  for (let i = 0; i < this.cards.length; i++) {
    this.cards[i].print();
  }
};
const deck = new Deck();

console.log(deck+"\n");

