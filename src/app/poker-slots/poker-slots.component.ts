import { DOCUMENT } from '@angular/common';
import { Component, OnInit, AfterViewInit, Inject, ViewChild, Renderer2, AfterViewChecked, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-poker-slots',
  templateUrl: './poker-slots.component.html',
  styleUrls: ['./poker-slots.component.scss']
})

export class PokerSlotsComponent implements AfterViewInit, AfterViewChecked {
  cards: any;
  shuffle: any;
  suit: any;
  rank: any;
  getCards: any;
  getCard: any;
  mySubscription: any;
  slot1: any
  slot2: any
  slot3: any
  winnerMsg: string = "3 of same suit wins";
  slotWheelOne: any;
  slotWheelTwo: any;
  slotWheelThree: any;
  winIcon: string;
  htmlToAdd: any;
  animationDuration: string;
  opacity: string = ".2";

  constructor(@Inject(DOCUMENT) private _document: Document, private renderer: Renderer2) {
    this.Deck();
  }

  ngAfterViewInit() {
    this.slot1 = <HTMLElement>document.getElementById('slot1');
    this.slot2 = <HTMLElement>document.getElementById('slot2');
    this.slot3 = <HTMLElement>document.getElementById('slot3');
    setTimeout(() => {
      this.isWinner();
      clearTimeout(10);
    }, 6600);
  }

  ngAfterViewChecked() {

  }

  audio() {
    this.htmlToAdd = '<div><audio autoplay><source src = "../../assets/audio/coins.mp3" type = "audio/mpeg" ></audio></div>';
  }

  isWinner() {
    this.slotWheelOne = this.slot1.childNodes[10].childNodes[0].className;
    this.slotWheelTwo = this.slot2.childNodes[10].childNodes[0].className;
    this.slotWheelThree = this.slot3.childNodes[10].childNodes[0].className;
    console.log(this.slotWheelOne, this.slotWheelTwo, this.slotWheelThree);
    if (this.slotWheelOne === this.slotWheelTwo && this.slotWheelOne === this.slotWheelThree && this.slotWheelOne) {
      console.log("winner")
      this.winnerMsg = "You Won";
      this.winIcon = "winIcon";

      this.audio();
    }
  }

  reset() {
    // reset the transition by...
    // -> removing the class
    this.slot1.classList.remove("slot");
    this.slot2.classList.remove("slot");
    this.slot3.classList.remove("slot");


    void this.slot1.offsetWidth;
    void this.slot2.offsetWidth;
    void this.slot3.offsetWidth;

    // -> and re-adding the class
    this.slot1.classList.add("slot");
    this.slot2.classList.add("slot");
    this.slot3.classList.add("slot");
  }

  refreshPage() {
    this.winnerMsg = "3 of same suit wins";
    this.winIcon = "nowinIcon";
    this.reset();
    this.Deck();
    this.updateStyler();
  }


  updateStyler() {
    const css = ` `;
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  };

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

    setTimeout(() => {
      this.isWinner();
      clearTimeout(10);
    }, 6600);
  }
}
