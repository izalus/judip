import React from "react";
import { observer } from "mobx-react";
import Container, { Backdrop } from "./Modal.styles";
import Store from "App/App.store";
import { Imodal } from "App/App.types";
import Form from "components/Form/Form";

export const Modal: React.FC<Imodal> = observer(props => {
  return props.open ? (
    <>
      <Container>
        <div className="title">{props.title}</div>
        <Form />
        <div className="buttons">
          {props.buttons.map(({ name, task }, i) => (
            <button key={i} onClick={task}>
              {name}
            </button>
          ))}
        </div>
      </Container>
      <Backdrop onClick={() => Store.closeModal()} />
    </>
  ) : null;
});

export default observer(() => <Modal {...Store.modal} />);
