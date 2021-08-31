import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

afterEach(() => {
  axios.get.mockClear();
});

function mockCall() {
  axios.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          id: 436969,
          original_title: "The Suicide Squad",
          overview:
            "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
          popularity: 3692.281,
          poster_path: "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg",
          release_date: "2021-07-28",
          title: "The Suicide Squad",
          vote_average: 8,
        },
        {
          id: 385128,
          original_title: "F9",
          overview:
            "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
          popularity: 1637.843,
          poster_path: "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
          release_date: "2021-05-19",
          title: "F9",
          vote_average: 7.6,
        },
      ],
    },
  });
}

describe("Testing App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("check that api is called and data is rendered", async () => {
    mockCall();
    const { getAllByTestId, getByText } = render(<App />);
    const rowValues = await waitFor(() =>
      getAllByTestId("card").map((row) => row)
    );

    const header = getByText("The Suicide Squad");
    expect(rowValues[0]).toContainElement(header);
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  test("accepts search term", async () => {
    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "cruella");
    expect(screen.getByTestId("search-input")).toHaveValue("cruella");
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
  });

  test("loading spinner is shown while API request is in progress", async () => {
    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "cruella");
    const loading = screen.getByTestId("loading-icon");
    expect(loading).toBeInTheDocument();
  });

  test("renders Layout Component", () => {
    const layoutEl = screen.getByTestId("layout");
    expect(layoutEl).toBeInTheDocument();
  });

  test("renders input tag", () => {
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("modal is invisible on mount", () => {
    const modal = screen.getByTestId("modal");
    expect(modal).toHaveStyle(`display: none`);
  });
});
