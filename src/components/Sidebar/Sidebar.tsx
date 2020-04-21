import React from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";

import Store from "App/App.store";
import { colors, shadows } from "global/constants";

const Container = styled.div`
  height: 100%;
  width: 60px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary_dark};
  box-shadow: ${shadows.shadow1};

  .action {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.gray};
    cursor: pointer;

    :hover {
      color: ${colors.accent};
    }

    :active {
      color: ${colors.gray};
    }

    svg {
      font-size: 30px;
      margin: 20px 0 4px;
    }

    p {
      font-size: 11px;
    }
  }
`;

const Sidebar = () => {
  return (
    <Container>
      {Store.sidebar.actions.map(({ name, Icon, task }, i) => (
        <div className="action" key={i} onClick={task}>
          <Icon />
          <p className="unselectable">{name}</p>
        </div>
      ))}
    </Container>
  );
};

export default observer(Sidebar);
