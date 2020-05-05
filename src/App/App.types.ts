import { FC } from "react";
interface IAction {
  Icon: FC;
  name: string;
  task: () => void;
}

export interface ISidebar {
  actions: IAction[];
}

export interface IButton {
  name: string;
  task: () => void;
}

export interface IModal {
  open: boolean;
  title: string;
  buttons: IButton[];
}

interface IInput {
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

interface ISelect {
  element: "select";
  options: options;
  name: string;
  label: string;
  value: string;
  optional?: boolean;
}

interface IRadio {
  element: "radio";
  options: [string, string];
  name: string;
  label: string;
  value: string;
  optional?: boolean;
}

interface ICheckbox {
  element: "checkbox";
  name: string;
  label: string;
  value: boolean;
  optional?: boolean;
}

interface ITextarea {
  element: "textarea";
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  optional?: boolean;
}

export type IForm = IInput | ISelect | IRadio | ICheckbox | ITextarea;

interface IText {
  element: "text";
  value: string;
}

export type IContent = IText;
