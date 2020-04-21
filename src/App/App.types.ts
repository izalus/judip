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

interface Iinput {
  element: "input";
  type: "text" | "number";
  name: string;
  label: string;
  value: string;
  optional?: boolean;
  placeholder?: string;
}

type options = {
  0: string;
  1: string;
  2: string;
} & string[];

interface Iselect {
  element: "select";
  options: options;
  name: string;
  label: string;
  value: string;
  optional?: boolean;
}

interface Iradio {
  element: "radio";
  options: [string, string];
  name: string;
  label: string;
  value: string;
  optional?: boolean;
}

interface Icheckbox {
  element: "checkbox";
  name: string;
  label: string;
  value: boolean;
  optional?: boolean;
}

interface Itextarea {
  element: "textarea";
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  optional?: boolean;
}

export type Iform = Iinput | Iselect | Iradio | Icheckbox | Itextarea;
