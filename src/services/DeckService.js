const HEARTS = { type: "HEARTS", abbreviation: "H" };
const SPADES = { type: "SPADES", abbreviation: "S" };
const CLUBS = { type: "CLUBS", abbreviation: "C" };
const DIAMONDS = { type: "DIAMONDS", abbreviation: "D" };
const JOKER_SUITE = { type: "JOKER", abbreviation: "J" };
const SUITES = [HEARTS, SPADES, CLUBS, DIAMONDS];

const TWO = { type: "TWO", face: "2", rank: -1, wild: true, points: 20 };
const THREE = { type: "THREE", face: "3", rank: 3, wild: false, points: 5 };
const FOUR = { type: "FOUR", face: "4", rank: 4, wild: false, points: 5 };
const FIVE = { type: "FIVE", face: "5", rank: 5, wild: false, points: 5 };
const SIX = { type: "SIX", face: "6", rank: 6, wild: false, points: 5 };
const SEVEN = { type: "SEVEN", face: "7", rank: 7, wild: false, points: 5 };
const EIGHT = { type: "EIGHT", face: "8", rank: 8, wild: false, points: 10 };
const NINE = { type: "NINE", face: "9", rank: 9, wild: false, points: 10 };
const TEN = { type: "TEN", face: "10", rank: 10, wild: false, points: 10 };
const JACK = { type: "JACK", face: "J", rank: 11, wild: false, points: 10 };
const QUEEN = { type: "QUEEN", face: "Q", rank: 12, wild: false, points: 10 };
const KING = { type: "KING", face: "K", rank: 13, wild: false, points: 10 };
const ACE = { type: "ACE", face: "A", rank: 14, wild: false, points: 20 };
const JOKER = { type: "JOKER", face: "R", rank: -1, wild: false, points: 50 };

const FULL_SUITE = [
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE
];

/* PUBLIC FUNCTIONS */
function dealNewGame(options) {}

function generateShuffledDeck(numberOfDecks) {
  let gameDeck = [];
  for (let i = 0; i < numberOfDecks; i++) {
    gameDeck = gameDeck.concat(generateOneDeck());
  }
  return shuffle(gameDeck);
}

function printDeck(deck, prefix) {
  const output = deck.reduce((lines, card, index) => {
    if (index % 13 === 0) {
      lines.push(
        (!!prefix ? prefix + ": " : "") +
          "Row " +
          (lines.length + 1) +
          ": " +
          card.rank.face +
          card.suite.abbreviation
      );
    } else {
      lines[lines.length - 1] =
        lines[lines.length - 1] +
        " " +
        card.rank.face +
        card.suite.abbreviation;
    }
    return lines;
  }, []);
  output.forEach(line => console.log(line));
}

/* INTERNAL FUNCTIONS */
function generateOneDeck() {
  return SUITES.flatMap(suite =>
    FULL_SUITE.map(rank => ({ rank, suite }))
  ).concat([
    { rank: JOKER, suite: JOKER_SUITE },
    { rank: JOKER, suite: JOKER_SUITE }
  ]);
}

//Fisher-Yates shuffle
function shuffle(deck) {
  let shuffledDeck = deck.slice();
  //Loop from 1 to 10 times
  const loops = 1; //Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < loops; i++) {
    shuffledDeck = shuffledDeck.reduce((afterShuffle, card, index) => {
      const swap = Math.floor(Math.random() * afterShuffle.length);
      const temp = afterShuffle[swap];

      // console.log(
      //   "Starting shuffle turn, length",
      //   afterShuffle.length,
      //   "index",
      //   index,
      //   "swap",
      //   swap
      // );
      // printDeck(afterShuffle);

      afterShuffle[swap] = afterShuffle[index];
      afterShuffle[index] = temp;
      return afterShuffle;
    }, shuffledDeck.slice());
  }

  return shuffledDeck;
}

export const deckService = {
  dealNewGame,
  generateShuffledDeck,
  printDeck
};
