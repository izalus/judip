import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("<App />", () => {
  it("should not be empty", () => {
    const app = shallow(<App />);
    expect(app.isEmptyRender()).toBe(false);
  });
});
