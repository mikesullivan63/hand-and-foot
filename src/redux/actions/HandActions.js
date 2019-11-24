const DRAW_FROM_DECK = "DRAW_FROM_DECK";
const DRAW_FROM_PILE = "DRAW_FROM_PILE";
const PLAY_CARD = "PLAY_CARD";
const DISCARD_CARD = "DISCARD_CARD";

export function drawFromDeck() {
  return { type: DRAW_FROM_DECK };
}

export function drawFromPile() {
  return { type: DRAW_FROM_PILE };
}

export function playCard(details) {
  return { type: PLAY_CARD, details };
}

export function discardCard() {
  return { type: DISCARD_CARD };
}
