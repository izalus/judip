import React from "react";

import Container from "Editor/Editor.styles";
import Modal from "components/Modal/Modal";
import Codeblock from "components/Codeblock/Codeblock";

export const Editor: React.FC = () => {
  return (
    <Container>
      <Modal />
      <Codeblock
        tabs={["console", "main.py"]}
        selectedTab={1}
        name="Python 2"
        actions={[{ name: "Run", task: () => {} }]}
      />
      <Codeblock
        tabs={["console", "main.class"]}
        selectedTab={1}
        name="Java"
        actions={[{ name: "Run", task: () => {} }]}
      />
    </Container>
  );
};

export default Editor;
