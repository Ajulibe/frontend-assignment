import React from "react";
import { MovieWrapper, Title, FlexContainer, Empty } from "./style";
import { CardWidget } from "../card";
import { Spinner } from "../spinner";

const Content = ({ isLoading, data, isMounted, showModal }) => {
  return (
    <FlexContainer>
      <Title>Most Recent Movies</Title>
      <MovieWrapper>
        {!isLoading &&
          data.map((item) => {
            return (
              <CardWidget
                key={item.id}
                item={item}
                onClick={() => {
                  showModal(item);
                }}
              />
            );
          })}

        {data.length === 0 && !isLoading && isMounted.current ? (
          <Empty data-testid="error-message">NO RESULTS FOUND</Empty>
        ) : null}

        {isLoading && <Spinner />}
      </MovieWrapper>
    </FlexContainer>
  );
};

export default Content;
