import React from "react";
import { observer } from "mobx-react";
import Container, { Backdrop } from "./Modal.styles";
import Store from "App/App.store";

const Modal = () => {
  return Store.modal.open ? (
    <>
      <Container></Container>
      <Backdrop onClick={() => Store.triggerModal(false)} />
    </>
  ) : null;
};

export default observer(Modal);
