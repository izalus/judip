import React from "react";
import nl2br from "react-nl2br";

import { IContent } from "App/App.types";

export const getOption = (option: IContent, key: number) => {
  let res = null;

  if (option.element === "text") {
    res = (
      <div className="text" key={key}>
        <p>{nl2br(option.value)}</p>
      </div>
    );
  }

  return res;
};
