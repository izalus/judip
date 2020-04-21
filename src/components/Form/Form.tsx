import React from "react";
import { observer } from "mobx-react";
import Store from "App/App.store";
import Container from "./Form.styles";
import { Iform } from "App/App.types";
import { getFormInput } from "./Form.functions";

interface Iprops {
  options: Iform[];
  onChange: (index: number, value: string) => void;
}

export const Form: React.FC<Iprops> = observer(props => {
  return (
    <Container>
      {props.options.map((option, i) =>
        getFormInput(i, option, props.onChange)
      )}
    </Container>
  );
});

export default observer(() => (
  <Form options={Store.form} onChange={Store.onFormChange} />
));
