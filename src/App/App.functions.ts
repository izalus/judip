import { FC } from "react";
import { ISidebar, IModal, IForm, IContent, IButton, ICode } from "./App.types";

const { exec: Exec } = window.require("child_process");
const util = window.require("util");
const exec = util.promisify(Exec);

export const defaults = {
  sidebar: (Run: FC, Add: FC, openModal: () => void): ISidebar => ({
    actions: [
      {
        Icon: Run,
        name: "Run All",
        task: () => {}
      },
      {
        Icon: Add,
        name: "New",
        task: () => openModal()
      }
    ]
  }),
  modal: (): IModal => ({
    open: false,
    title: "Pending Installations...",
    buttons: []
  }),
  form: (): IForm[] => [
    // input[text] - text, input[number] - number, select - [](3 or more),
    // radio - [](2 or more), checkbox - boolean, textarea - multitext
    // { label, value, default, optional }
    /* {
      element: "input",
      type: "text",
      name: "recipe-name",
      label: "",
      value: "",
      placeholder: "Ex: python, java, akhileshns/wordpress"
    },
    {
      element: "input",
      type: "number",
      name: "ram",
      label: "Enter Ram (in MB)",
      value: "1000"
    },
    {
      element: "select",
      optionLabels: ["mysql", "pg", "mongo"],
      options: ["mysql", "postgres", "mongodb"],
      name: "database",
      label: "Choose Database",
      value: "mysql"
    },
    {
      element: "radio",
      optionLabels: ["2", "3"],
      options: ["2", "3"],
      name: "version",
      label: "Choose version",
      value: "2"
    },
    {
      element: "checkbox",
      name: "background",
      label: "Run in background by default",
      value: false
    },
    {
      element: "textarea",
      name: "comments",
      label: "Enter comments (if any)",
      value: "",
      optional: true
    } */
  ],
  contact: (): IContent[] => [
    {
      element: "text",
      value: `In order to complete setup, the following software will need to be installed on your machine`
    }
  ],
  code: (): ICode => ({
    name: "hello-world",
    location: "C:\\_WORKING\\Development\\judip-demo"
  })
};

interface Ideps {
  isGit: boolean;
  isNode: boolean;
  isJudip: boolean;
  isDocker: boolean;
}

export const checkDependencies = async (): Promise<Ideps> => {
  let isGit = false;
  let isNode = false;
  let isJudip = false;
  let isDocker = false;

  try {
    await exec("git --version");
    isGit = true;
  } catch ({ err, errStr }) {
    console.error(errStr);
  }

  try {
    await exec("node --version");
    isNode = true;
    await exec("judip --version");
    isJudip = true;
  } catch ({ err, errStr }) {
    console.error(errStr);
  }

  try {
    await exec("docker --version");
    isDocker = true;
  } catch ({ err, errStr }) {
    console.error(errStr);
  }

  return { isGit, isNode, isJudip, isDocker };
};
