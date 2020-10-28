import { Component, OnInit } from '@angular/core';
import { listAnimation, actionAnimation } from '../animations';
@Component({
  selector: 'app-deck-of-cards',
  templateUrl: './deck-of-cards.component.html',
  styleUrls: ['./deck-of-cards.component.scss'],
  animations: [
    listAnimation,
    actionAnimation
  ],
})
export class DeckOfCardsComponent implements OnInit {
  cards: any;
  shuffle: any;
  suit: any;
  rank: any;
  getCards: any;
  getCard: any;


  constructor() {
    this.Deck();
  }

  ngOnInit() {
  }

  Deck() {
    this.cards = [];
    this.shuffle = function () {
      var j, x, i;
      for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
      }

    }
    for (this.suit = 4; this.suit > 0; this.suit--) {

      for (this.rank = 13; this.rank > 0; this.rank--) {
        this.suit = "Hearts";
        this.cards.push({
          suit: this.suit,
          rank: 'r' + this.rank.toString()
        });
      }
    }
    for (this.suit = 3; this.suit > 0; this.suit--) {

      for (this.rank = 13; this.rank > 0; this.rank--) {
        this.suit = "Diamonds";
        this.cards.push({
          suit: this.suit,
          rank: 'r' + this.rank.toString()
        });
      }
    }
    for (this.suit = 2; this.suit > 0; this.suit--) {

      for (this.rank = 13; this.rank > 0; this.rank--) {
        this.suit = "Clubs";
        this.cards.push({
          suit: this.suit,
          rank: 'r' + this.rank.toString()
        });
      }
    }
    for (this.suit = 1; this.suit > 0; this.suit--) {

      for (this.rank = 13; this.rank > 0; this.rank--) {
        this.suit = "Spades";
        this.cards.push({
          suit: this.suit,
          rank: 'r' + this.rank.toString()
        });
      }
    }
    this.getCards = function (number) {
      if (typeof number === 'undefined') number = 1;
      var returnCards = [];
      for (var i = number; i > 0; i--) {
        returnCards.push(this.cards.pop());
      }

      return returnCards;
    }
    this.getCard = function () {
      return this.getCards(1);
    }
    this.shuffle();
  }
}
