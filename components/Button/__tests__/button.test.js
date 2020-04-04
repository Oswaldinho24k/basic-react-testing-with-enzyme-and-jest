import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Button from "../Button";

describe("Render Button based on props", () => {
  const handleClick = jest.fn()
  test("if disabled prop, button is disabled", () => {
    const button = renderer.create(<Button disabled={true} onClick={handleClick}>text</Button>)
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test("if disabled == false, button can be clickable", () => {
    const button = renderer.create(<Button onClick={handleClick}>text</Button>)
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  })
})