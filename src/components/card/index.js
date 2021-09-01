import React from "react";
import { Card, CardPreview, Rating, MovieTitle } from "./style";
import config from "config"; //configuration file mapping env

export const CardWidget = ({ item, onClick }) => {
  return (
    <Card key={item.id} onClick={onClick} className="card" data-testid="card">
      <CardPreview>
        {item.poster_path ? (
          <img
            loading="lazy"
            width="100"
            height="100"
            src={`${config.IMAGE_BASE_URL}${item?.poster_path}`}
            alt={item.original_title}
          />
        ) : (
          <p className="no-image">NO IMAGE</p>
        )}
        <Rating>{item.vote_average}</Rating>
      </CardPreview>
      <MovieTitle>
        <span>{item.original_title}</span>
      </MovieTitle>
    </Card>
  );
};
