import React, { useContext } from "react";
import { DetailsContext } from "../../context/context";
import Card from "./Card";

function HomeCards() {
  const { home } = useContext(DetailsContext);
  const { article } = home;
  return (
    <React.Fragment>
      {article.map((card) => {
        return <Card key={card.id} article={card}></Card>;
      })}
    </React.Fragment>
  );
}

export default HomeCards;
