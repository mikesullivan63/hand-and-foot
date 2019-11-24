import { deckService } from "../services/DeckService";

describe("Test shuffling", () => {
  test("Test one deck shuffle", () => {
    const deck = deckService.generateShuffledDeck(1);

    expect(deck.length).toBe(54);
    deckService.printDeck(deck, "1 Deck, Deck 1");

    const secondDeck = deckService.generateShuffledDeck(1);

    expect(secondDeck.length).toBe(54);
    deckService.printDeck(deck, "1 Deck, Deck 2");

    expect(
      deck.some(
        (card, index) =>
          card.rank.type !== secondDeck[index].rank.type ||
          card.suite.type !== secondDeck[index].suite.type
      )
    ).toBe(true);
  });

  test("Test three deck shuffle", () => {
    const deck = deckService.generateShuffledDeck(3);

    expect(deck.length).toBe(162);
    deckService.printDeck(deck, "3 Deck, Deck 1");

    const secondDeck = deckService.generateShuffledDeck(3);

    expect(secondDeck.length).toBe(162);
    deckService.printDeck(deck, "3 Deck, Deck 2");

    expect(
      deck.some(
        (card, index) =>
          card.rank.type !== secondDeck[index].rank.type ||
          card.suite.type !== secondDeck[index].suite.type
      )
    ).toBe(true);
  });

  test("Test seven deck shuffle", () => {
    const deck = deckService.generateShuffledDeck(7);

    expect(deck.length).toBe(54 * 7);
    deckService.printDeck(deck, "7 Deck, Deck 1");

    const secondDeck = deckService.generateShuffledDeck(7);

    expect(secondDeck.length).toBe(54 * 7);
    deckService.printDeck(deck, "7 Deck, Deck 2");

    expect(
      deck.some(
        (card, index) =>
          card.rank.type !== secondDeck[index].rank.type ||
          card.suite.type !== secondDeck[index].suite.type
      )
    ).toBe(true);
  });
});
