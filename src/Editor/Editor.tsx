import React from "react";

import Container from "Editor/Editor.styles";
import Modal from "components/Modal/Modal";
import Codeblock from "components/Codeblock/Codeblock";

export const Editor: React.FC = () => {
  return (
    <Container>
      <Modal />
      <Codeblock />
      <Codeblock />
    </Container>
  );
};

export default Editor;
