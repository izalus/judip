import React from "react";
import { observer } from "mobx-react";

import Store from "App/App.store";
import { Isidebar } from "App/App.types";
import Container from "./Sidebar.styles";

export const Sidebar: React.FC<Isidebar> = observer(props => {
  return (
    <Container>
      {props.actions.map(({ name, Icon, task }, i) => (
        <div className="action" key={i} onClick={task}>
          <Icon />
          <p className="unselectable">{name}</p>
        </div>
      ))}
    </Container>
  );
});

export default observer(() => <Sidebar {...Store.sidebar} />);
