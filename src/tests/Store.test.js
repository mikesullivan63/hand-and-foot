import { deckService } from "../services/DeckService";
import handAndFootApp from "../redux/reducers/GameReducers";
import {
  startNewMatch,
  startGame,
  endTurn,
  endGame,
  endMatch
} from "../redux/actions/GameActions";
import store from "../redux/store/Store";

describe("Test store actions", () => {
  test("Test subscriptions", () => {
    // Log the initial state
    console.log(store.getState());

    // Every time the state changes, log it
    // Note that subscribe() returns a function for unregistering the listener
    const unsubscribe = store.subscribe(() =>
      console.log("Updated state: " + JSON.stringify(store.getState(), null, 2))
    );

    const deck = deckService.generateShuffledDeck(3);
    const playerHand = deck.slice(0, 13);
    const playerFoot = deck.slice(13, 26);

    const computerHand = deck.slice(26, 39);
    const computerFoot = deck.slice(39, 52);

    const discardPile = deck.slice(52, 53);
    const drawPile = deck.slice(53);

    const gameState = {
      drawPile,
      discardPile,
      computerHand,
      computerFoot,
      computerMelds: [],
      playerHand,
      playerFoot,
      playerMelds: [],
      computerScore: 0,
      playerScore: 0
    };

    store.dispatch(startGame(gameState));

    expect(store.getState().drawPile.length).toBe(109);
    expect(store.getState().discardPile.length).toBe(1);

    expect(store.getState().computerHand.length).toBe(13);
    expect(store.getState().computerFoot.length).toBe(13);

    expect(store.getState().playerHand.length).toBe(13);
    expect(store.getState().playerFoot.length).toBe(13);

    expect(
      store
        .getState()
        .computerHand.every(
          (card, index) =>
            card.rank.type === computerHand[index].rank.type &&
            card.suite.type === computerHand[index].suite.type
        )
    ).toBe(true);

    // Stop listening to state updates
    unsubscribe();
  });
});
