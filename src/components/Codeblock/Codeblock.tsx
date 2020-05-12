import React from "react";
import Container, { Output } from "./Codeblock.styles";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "./Codeblock.imports";
import { getModeForPath } from "ace-builds/src-min-noconflict/ext-modelist";
import { v4 as uuid } from "uuid";
import {
  IoMdExpand as FullScreen,
  IoMdContract as ExitFullScreen
} from "react-icons/io";
import { IBlock } from "App/App.types";
import { observer } from "mobx-react";

interface IProps {
  syncedBlock: IBlock;
  block: IBlock;
  index: number;
  setBlockTab: (index: number, tabIndex: number, value: string) => void;
  setBlockLogs: (index: number, value: string) => void;
  saveBlock: (index: number) => void;
  runBlock: (index: number) => void;
}

const Codeblock: React.FC<IProps> = props => {
  const [selectedTab, setTab] = React.useState<number>(0);
  const [outputVisibility, setOutputVisibility] = React.useState<boolean>(
    false
  );
  const [fullscreen, setScreen] = React.useState<boolean>(false);

  const mode =
    props.block.tabs[selectedTab].type === "code"
      ? getModeForPath(props.block.tabs[selectedTab].path).name
      : "text";

  return (
    <>
      <Container fullscreen={fullscreen} outputVisibility={outputVisibility}>
        <div className="tabs">
          {props.block.tabs.map((tab, i) => (
            <div
              onClick={() => setTab(i)}
              className={"tab " + (i === selectedTab ? "selected" : "")}
              key={i}>
              {tab.type === "code" ? tab.path : tab.type}
            </div>
          ))}
          <div className="name">{props.block.name}</div>
        </div>
        <AceEditor
          style={{
            width: "100%",
            height: "100%"
          }}
          fontSize="14px"
          mode={mode}
          theme="tomorrow_night_bright"
          value={props.block.tabs[selectedTab].value}
          onChange={(newValue: string) =>
            props.setBlockTab(props.index, selectedTab, newValue)
          }
          name={uuid()}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            tabSize: 2,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableEmmet: true,
            enableSnippets: true
          }}
          showPrintMargin={false}
        />
        <div className="actions">
          {fullscreen ? (
            <ExitFullScreen onClick={() => setScreen(false)} />
          ) : (
            <FullScreen onClick={() => setScreen(true)} />
          )}
          <button onClick={() => setOutputVisibility(!outputVisibility)}>
            {outputVisibility ? "Hide" : "Show"} Output
          </button>
          <button
            onClick={() => props.saveBlock(props.index)}
            disabled={
              props.syncedBlock && props.block
                ? props.syncedBlock.tabs[selectedTab].value ===
                  props.block.tabs[selectedTab].value
                : false
            }>
            Save
          </button>
          <button onClick={() => props.runBlock(props.index)}>Run</button>
        </div>
      </Container>
      <Output fullscreen={fullscreen} outputVisibility={outputVisibility}>
        <div className="topbar">
          <p>Output</p>
        </div>
        <AceEditor
          style={{
            width: "100%",
            height: "100%"
          }}
          fontSize="14px"
          mode="text"
          theme="tomorrow_night_bright" // ["merbivore","terminal","tomorrow_night_bright","twilight"]
          value={props.block.logs}
          onChange={(newOutput: string) =>
            props.setBlockLogs(props.index, newOutput)
          }
          name={uuid()}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: false,
            tabSize: 2,
            enableEmmet: false
          }}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
        />
      </Output>
    </>
  );
};

export default observer(Codeblock);
