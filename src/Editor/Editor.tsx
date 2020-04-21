import React from "react";
import { observer } from "mobx-react";

import Container from "Editor/Editor.styles";
import Modal from "components/Modal/Modal";

const Editor: React.FC = () => {
  return (
    <Container>
      <Modal />
    </Container>
  );
};

export default observer(Editor);
