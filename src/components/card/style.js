import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Card = styled.div`
  width: 28rem;
  height: 34.8rem;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.cardBorder};
  box-sizing: border-box;
  box-shadow: 1px 2px 8px 2px ${COLORS.cardShadow};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 651px) {
    width: 22rem;
    height: 30.8rem;
  }

  @media only screen and (max-width: 520px) {
    width: 45%;
    height: 26.8rem;
  }

  @media only screen and (max-width: 430px) {
    width: 28rem;
    height: 34.8rem;
  }
`;
export const CardPreview = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .no-image {
    font-size: 20px;
    position: absolute;
    font-weight: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MovieTitle = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: ${COLORS.black};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 13px 13px 13px;
`;

export const Rating = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  left: 15px;
  top: 15px;
  background: ${COLORS.white};
  border: 1.5px solid ${COLORS.black};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: ${COLORS.black};
`;
