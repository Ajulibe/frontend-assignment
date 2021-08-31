import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const SearchInputWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    left: 10.67px;
    top: 10.67px;
  }
`;

export const SearchInput = styled.input`
  height: 36px;
  width: 180px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.inputBorder};
  box-sizing: border-box;
  border-radius: 2px;
  color: ${COLORS.black};
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  padding: 10px 34px 11px 34px;

  ::placeholder {
    color: ${COLORS.placeholderColor};
  }

  :focus {
    border: none;
    outline: 0;
  }

  &:focus-within {
    border: 1px solid ${COLORS.primary};
  }
`;
