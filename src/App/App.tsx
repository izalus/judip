import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "@emotion/styled";

import Editor from "Editor/Editor";
import { colors, zIndices } from "global/constants";
import Sidebar from "components/Sidebar/Sidebar";
import Controller from "./App.controller";

// const {app} = window.require('electron').remote;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  display: flex;
  z-index: ${zIndices.base};
`;

export const App = () => {
  return (
    <Container>
      <Controller />
      <Sidebar />
      <Router>
        <Route path="/" component={Editor} />
      </Router>
    </Container>
  );
};

export default App;
