import React from "react";
import { observer } from "mobx-react";
import Container, { Backdrop } from "./Modal.styles";
import Store from "App/App.store";
import { IModal } from "App/App.types";
import Form from "components/Form/Form";
import Content from "components/Content/Content";

export const Modal: React.FC<IModal> = observer(props => {
  return props.open ? (
    <>
      <Container>
        <div className="title">{props.title}</div>
        <Content />
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
