import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Index from "../pages/index.js";
import Button from "../components/Button/Button.js";

describe("With Enzyme", () => {
  test('Component shows Kiubo', () => {
    const component = shallow(<Index />);
    expect(component.find("h2").text()).toEqual("Kiubole");
  });
});

describe("With Snapshot Testing", () => {
  test('App shows "Kiubo"', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("show text after click", () => {
  test('Show quedate en tu casa', () => {
    const component = shallow(<Index />);
    component.find(Button).at(1).simulate('click');
    console.log(component.find("p").text())
    expect(component.find("p").text()).toEqual("Quédate en tu casa!!!");
  });
});