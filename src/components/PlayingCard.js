import React from "react";
import { Card } from "react-semantic-ui";

const PlayingCard = props => {
  if (!!props.hidden) {
    return <Card raised image={"/public/card_back.png"}></Card>;
  }
  return (
    <Card
      raised
      header={props.card.rank.face + " " + props.card.suite.type}
    ></Card>
  );
};
export default PlayingCard;
