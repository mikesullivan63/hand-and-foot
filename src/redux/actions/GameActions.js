const NEW_MATCH = "NEW_MATCH";
const NEW_GAME = "NEW_GAME";
const END_TURN = "END_TURN";
const END_GAME = "END_GAME";
const END_MATCH = "END_MATCH";

export function startNewMatch(options) {
  return { type: NEW_MATCH, options };
}

export function startNewGame() {
  return { type: NEW_GAME };
}

export function endTurn() {
  return { type: END_TURN };
}

export function endGame(scores) {
  return { type: END_GAME, scores };
}

export function endMatch() {
  return { type: END_MATCH };
}
