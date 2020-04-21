import { FC } from "react";

export interface Iconfig {
  path: string;
}

interface Iaction {
  Icon: FC;
  name: string;
  task: () => void;
}

export interface Isidebar {
  actions: Iaction[];
}

export interface Imodal {
  open: boolean;
}
