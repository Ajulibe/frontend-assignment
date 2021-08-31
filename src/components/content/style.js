import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.7rem;
  column-gap: 2.6rem;
  justify-content: space-between;
  align-self: center;

  &:after {
    content: "";
    margin-left: 28rem;
  }

  @media only screen and (max-width: 991px) {
    max-width: 60rem;
  }

  @media only screen and (max-width: 651px) {
    max-width: 100%;
    justify-content: center;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0.7rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.8rem;
  color: ${COLORS.black};
  margin-bottom: 2.3rem;
  align-self: flex-start;
  @media only screen and (max-width: 991px) {
    align-self: center;
  }
`;

export const Empty = styled.div`
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
