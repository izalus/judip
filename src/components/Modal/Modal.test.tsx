import React from "react";
import { shallow } from "enzyme";
import { Modal } from "./Modal";

describe("<Modal />", () => {
  it("should render nothing if open is false", () => {
    const modal = shallow(<Modal open={false} title="" buttons={[]} />);
    expect(modal.isEmptyRender()).toBe(true);
  });
});
