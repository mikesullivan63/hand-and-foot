import React from "react";
import { Card } from "react-semantic-ui";
import PlayingCard from "./PlayingCard";

const Card = props => {
  return (
    <Card.Group itemsPerRow={props.cards.length}>
      {props.cards.map(card => (
        <PlayingCard card={card} hidden={props.hidden} />
      ))}
    </Card.Group>
  );
};

export default Hand;
