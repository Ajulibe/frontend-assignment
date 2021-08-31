import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.white};
`;

export const Wrapper = styled.div`
  width: 120rem;
  justify-content: center;

  @media only screen and (max-width: 1241px) {
    max-width: 90%;
  }
`;
