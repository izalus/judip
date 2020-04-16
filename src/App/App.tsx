import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { observer } from "mobx-react";
import styled from "@emotion/styled";

import Store from "./App.store";
import Editor from "Editor/Editor";
import { colors } from "global/constants";
import "components/Titlebar/Titlebar";

// const {app} = window.require('electron').remote;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
`;

const App = () => {
  console.log(Store.config.path);

  return (
    <Container>
      <Router>
        <Route path="/" component={Editor} />
      </Router>
    </Container>
  );
};

export default observer(App);
