import React from "react";
import { shallow } from "enzyme";
import { Modal } from "./Modal";
import Container, { Backdrop } from "./Modal.styles";

describe("<Modal />", () => {
  it("should render nothing if open is false", () => {
    const modal = shallow(<Modal open={false} title="" buttons={[]} />);
    expect(modal.isEmptyRender()).toBe(true);
  });

  it("should render a backdrop if open is true", () => {
    const modal = shallow(<Modal open={true} title="" buttons={[]} />);
    expect(modal.find(Backdrop).length).toBe(1);
  });

  it("should render some content if open is true and title and buttons is set", () => {
    const modal = shallow(
      <Modal
        open={true}
        title="Test Title"
        buttons={[
          {
            name: "Test Name",
            task: () => {}
          }
        ]}
      />
    );

    expect(modal.find(Container).length).toBe(1);
    expect(modal.find(".title").contains("Test Title")).toBe(true);
    expect(modal.find(".buttons").exists()).toBe(true);
    expect(modal.find(".buttons button").contains("Test Name")).toBe(true);
  });
});
