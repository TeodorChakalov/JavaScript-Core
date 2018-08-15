let result = (function () {
    const FACES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: "\u2660",
        HEARTS: "\u2665",
        DIAMONDS: "\u2666",
        CLUBS: "\u2663"
    };

    class Card{
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face(){
            return this._face;
        }

        set face(value){
            if(!FACES.includes(value)){
                throw new Error("Invalid face!");
            }
            this._face = value;
        }

        get suit(){
            return this._suit;
        }

        set suit(value){
            if(!Object.values(Suits).includes(value)){
                throw new Error('Invalid suit!');
            }
            this._suit = value;
        }
        toString(){
            return this._face + this._suit;
        }
    }

    return {Suits, Card}

})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);

console.log(card.toString());