import React from "react";
import ListNoteItem from "./ListNoteItem";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

describe("<ListNoteItem>", () => {
  let props;
  let component;

  const defaultProps = {
    onClick: jest.fn(),
    note: {
      title: "My new note",
      description: "new",
      createdAt: "2021-11-14T23:52:17.000Z",
    },
  };

  const { getByTestId } = render(<ListNoteItem {...defaultProps} />);

  const getComponent = () => {
    component = render(ListNoteItem, props);
  };

  beforeEach(() => {
    props = {
      ...defaultProps,
    };
  });

  it("should render a ListNoteItem container", () => {
    getComponent();
    component.getByTestId("note-container").toBeInTheDocument();
  });
});
