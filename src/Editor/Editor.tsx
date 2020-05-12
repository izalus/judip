import React from "react";

import Container from "Editor/Editor.styles";
import Modal from "components/Modal/Modal";
import Codeblock from "components/Codeblock/Codeblock";
import { observer } from "mobx-react";
import { IBlock } from "App/App.types";
import Store from "App/App.store";

interface IProps {
  blocks: IBlock[];
  syncedBlocks: IBlock[];
  setBlockTab: (index: number, tabIndex: number, value: string) => void;
  setBlockLogs: (index: number, value: string) => void;
  saveBlock: (index: number) => void;
  runBlock: (index: number) => void;
}

export const Editor: React.FC<IProps> = observer(props => {
  return (
    <Container>
      <Modal />
      {props.blocks.map((block, i) => (
        <Codeblock
          key={i}
          block={block}
          index={i}
          syncedBlock={props.syncedBlocks[i]}
          setBlockTab={props.setBlockTab}
          setBlockLogs={props.setBlockLogs}
          saveBlock={props.saveBlock}
          runBlock={props.runBlock}
        />
      ))}
    </Container>
  );
});

export default observer(() => (
  <Editor
    blocks={Store.blocks}
    syncedBlocks={Store.syncedBlocks}
    saveBlock={Store.saveBlock}
    setBlockLogs={Store.setBlockLogs}
    setBlockTab={Store.setBlockTab}
    runBlock={Store.runBlock}
  />
));
