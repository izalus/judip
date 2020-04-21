import React from "react";
import { observer } from "mobx-react";
import Container, { Backdrop } from "./Modal.styles";
import Store from "App/App.store";

const Modal = () => {
  return Store.modal.open ? (
    <>
      <Container>
        <div className="title">{Store.modal.title}</div>
        <div className="buttons">
          {Store.modal.buttons.map(({ name, task }, i) => (
            <button key={i} onClick={task}>
              {name}
            </button>
          ))}
        </div>
      </Container>
      <Backdrop onClick={() => Store.closeModal()} />
    </>
  ) : null;
};

export default observer(Modal);
