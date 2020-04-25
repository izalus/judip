import React from "react";
import Container from "./Codeblock.styles";
import AceEditor from "react-ace";
import "./Codeblock.imports";
import { getModeForPath } from "ace-builds/src-min-noconflict/ext-modelist";
import uuid from "uuid/v4";

const Codeblock = () => {
  const [value, setValue] = React.useState<string>("");
  const [lang, setLang] = React.useState<string>("javascript");

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
    <Container>
      <AceEditor
        style={{
          width: "100%",
          height: "100%"
        }}
        fontSize="16px"
        mode={lang}
        theme="cobalt"
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
    </Container>
  );
};

export default Codeblock;
