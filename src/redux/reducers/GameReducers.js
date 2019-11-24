import {
  NEW_MATCH,
  NEW_GAME,
  END_TURN,
  END_GAME,
  END_MATCH
} from "../actions/GameActions";
const COMPUTER = "COMPUTER";
const PLAYER = "PLAYER";

const initialState = {
  game: 0,
  gameStarted: false,
  currentTurn: PLAYER,
  drawPile: [],
  discardPile: [],
  computerHand: [],
  computerFoot: [],
  computerMelds: [],
  playerHand: [],
  playerFoot: [],
  playerMelds: [],
  computerScore: 0,
  playerScore: 0
};

function handAndFootApp(state = initialState, action) {
  switch (action.type) {
    case NEW_MATCH:
      return initialState;
    case NEW_GAME:
      return {
        ...state,
        ...{ gameStarted: true, game: state.game + 1 },
        ...action.details
      };
    default:
      return state;
  }
}

export default handAndFootApp;
