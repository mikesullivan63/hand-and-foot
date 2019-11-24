const COMPUTER = "COMPUTER";
const PLAYER = "PLAYER";

const initialState = {
  game: 0,
  gameStarted: false,
  currentTurn: PLAYER,
  discardPile: [],
  computerHand: [],
  computerFoot: [],
  playerHand: [],
  playerFoot: [],
  computerScore: 0,
  playerScore: 0
};
