import React from "react";
import { LogoWrapper } from "./style";
import logo from "images/logo.svg";
import { SearchBar } from "components/searchinput";

export const Header = ({ handleChange }) => {
  return (
    <LogoWrapper>
      <img src={logo} alt="Timescale" />
      <SearchBar onChange={handleChange} />
    </LogoWrapper>
  );
};
