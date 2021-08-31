import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 21px;
  padding-top: 20px;
  border-bottom: 1px solid ${COLORS.inputBorder};

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
  }
`;
