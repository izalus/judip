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
  optionLabels: options;
  options: options;
  name: string;
  label: string;
  value: string;
  optional?: boolean;
}

interface IRadio {
  element: "radio";
  optionLabels: [string, string];
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

export interface ICode {
  name: string;
  location: string;
}

interface ITab {
  type: "code" | "console";
  path?: string;
  value: string;
}

interface IOutputs {
  [key: string]: string | boolean;
}

export interface IBlock {
  name: string;
  recipe: string;
  id: number | string;
  tabs: ITab[];
  outputs: IOutputs;
  logs: string;
}
