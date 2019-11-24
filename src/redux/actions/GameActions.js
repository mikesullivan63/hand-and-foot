export const NEW_MATCH = "NEW_MATCH";
export const NEW_GAME = "NEW_GAME";
export const END_TURN = "END_TURN";
export const END_GAME = "END_GAME";
export const END_MATCH = "END_MATCH";

export function startNewMatch(options) {
  return { type: NEW_MATCH, options };
}

export function startGame(details) {
  return { type: NEW_GAME, details };
}

export function endTurn(details) {
  return { type: END_TURN, details };
}

export function endGame(scores) {
  return { type: END_GAME, scores };
}

export function endMatch() {
  return { type: END_MATCH };
}
