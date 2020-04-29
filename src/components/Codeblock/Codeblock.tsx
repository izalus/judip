import React from "react";
import Container, { Output } from "./Codeblock.styles";
import AceEditor from "react-ace";
import "./Codeblock.imports";
import { getModeForPath } from "ace-builds/src-min-noconflict/ext-modelist";
import uuid from "uuid/v4";
import {
  IoMdExpand as FullScreen,
  IoMdContract as ExitFullScreen
} from "react-icons/io";

interface IAction {
  name: string;
  task: () => void;
}

interface IProps {
  name: string;
  tabs: string[];
  selectedTab: number;
  fullscreen: boolean;
  actions: IAction[];
}

const Codeblock: React.FC<IProps> = props => {
  const [value, setValue] = React.useState<string>("");
  const [output, setOutput] = React.useState<string>("");
  const [lang, setLang] = React.useState<string>("javascript");
  const [outputVisibility, setOutputVisibility] = React.useState<boolean>(
    false
  );

  const setLanguageFromFile = (file: File) => {
    let reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const newValue = e.target?.result?.toString();
      setValue(newValue ? newValue : value);
    };
    reader.readAsText(file);

    setLang(getModeForPath(file.name).name);
  };

  return (
    <>
      <Container>
        <div className="tabs">
          {props.tabs.map((tab, i) => (
            <div
              className={"tab " + (i === props.selectedTab ? "selected" : "")}
              key={tab + i}>
              {tab}
            </div>
          ))}
          <div className="name">{props.name}</div>
        </div>
        <AceEditor
          style={{
            width: "100%",
            height: "100%"
          }}
          fontSize="14px"
          mode={lang}
          theme="tomorrow_night_bright" // ["merbivore","terminal","tomorrow_night_bright","twilight"]
          value={value}
          onChange={(newValue: string) => setValue(newValue)}
          name={uuid()}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            enableEmmet: true
          }}
          showPrintMargin={false}
        />
        <div className="actions">
          {props.fullscreen ? <ExitFullScreen /> : <FullScreen />}
          <button onClick={() => setOutputVisibility(!outputVisibility)}>
            {outputVisibility ? "Hide" : "Show"} Output
          </button>
          {props.actions.map(({ name, task }, i) => (
            <button onClick={task} key={name + i}>
              {name}
            </button>
          ))}
        </div>
      </Container>
      {outputVisibility ? (
        <Output>
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
            value={output}
            onChange={(newOutput: string) => setOutput(newOutput)}
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
      ) : null}
    </>
  );
};

export default Codeblock;
