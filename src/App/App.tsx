import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "@emotion/styled";

import Editor from "Editor/Editor";
import { colors } from "global/constants";
import "components/Titlebar/Titlebar";
import Sidebar from "components/Sidebar/Sidebar";

// const {app} = window.require('electron').remote;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  display: flex;
  z-index: 0;
`;

export const App = () => {
  return (
    <Container>
      <Sidebar />
      <Router>
        <Route path="/" component={Editor} />
      </Router>
    </Container>
  );
};

export default App;
