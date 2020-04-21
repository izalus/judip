import { FC } from "react";
interface Iaction {
  Icon: FC;
  name: string;
  task: () => void;
}

export interface Isidebar {
  actions: Iaction[];
}

interface Ibutton {
  name: string;
  task: () => void;
}

export interface Imodal {
  open: boolean;
  title: string;
  buttons: Ibutton[];
}
