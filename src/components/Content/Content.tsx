import React from "react";
import { observer } from "mobx-react";
import { IContent } from "App/App.types";
import Store from "App/App.store";

import Container from "./Content.styles";
import { getOption } from "./Content.functions";

interface IProps {
  options: IContent[];
}

export const Content: React.FC<IProps> = observer(props => {
  return (
    <Container>
      {props.options.map((option, i) => getOption(option, i))}
    </Container>
  );
});

export default observer(() => <Content options={Store.content} />);
