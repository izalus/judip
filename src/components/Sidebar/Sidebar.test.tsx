import React from "react";
import { shallow } from "enzyme";
import { Sidebar } from "./Sidebar";
import Container from "./Sidebar.styles";

describe("<Sidebar />", () => {
  it("should render nothing if actions is empty", () => {
    const sidebar = shallow(<Sidebar actions={[]} />);
    expect(sidebar.equals(<Container></Container>)).toBe(true);
  });

  it("should render icons with captions if actions is not empty", () => {
    const Icon = () => <span />;

    const sidebar = shallow(
      <Sidebar
        actions={[
          {
            Icon,
            name: "Test Name",
            task: () => {}
          }
        ]}
      />
    );
    expect(sidebar.find(".action").length).toBe(1);
    expect(sidebar.find(Icon).length).toBe(1);
    expect(sidebar.find("p").length).toBe(1);
    expect(sidebar.find("p").contains("Test Name")).toBe(true);
  });
});
