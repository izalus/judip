import { decorate, observable } from "mobx";
import { FC } from "react";

import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";

// Types
interface Iconfig {
  path: string;
}

interface Iaction {
  Icon: FC;
  name: string;
}

interface Isidebar {
  actions: Iaction[];
}

class Store {
  config: Iconfig = {
    path: "/"
  };

  sidebar: Isidebar = {
    actions: [
      {
        Icon: Run,
        name: "Run All"
      },
      {
        Icon: Add,
        name: "New"
      }
    ]
  };
}

decorate(Store, {
  config: observable,
  sidebar: observable
});

export default new Store();
