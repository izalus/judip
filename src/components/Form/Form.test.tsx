import React from "react";
import { shallow } from "enzyme";
import { Form } from "./Form";
import Container from "./Form.styles";

describe("<Form />", () => {
  it("should render nothing if options is empty", () => {
    const form = shallow(
      <Form options={[]} onChange={(i: number, x: string) => {}} />
    );
    expect(form.equals(<Container></Container>)).toBe(true);
  });
});
