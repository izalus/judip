import { FC } from "react";
import { Isidebar, Imodal, Iform } from "./App.types";

export const defaults = {
  sidebar: (Run: FC, Add: FC, openModal: () => void): Isidebar => ({
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
  modal: (closeModal: () => void): Imodal => ({
    open: false,
    title: "Enter Recipe Name",
    buttons: [
      {
        name: "Close",
        task: () => closeModal()
      },
      {
        name: "Add",
        task: () => {}
      }
    ]
  }),
  form: (): Iform[] => [
    // input[text] - text, input[number] - number, select - [](3 or more),
    // radio - [](2 or more), checkbox - boolean, textarea - multitext
    // { label, value, default, optional }
    {
      element: "input",
      type: "text",
      name: "recipe-name",
      label: "",
      value: "",
      placeholder: "Ex: python, java, akhileshns/wordpress"
    }
    /* {
      element: "input",
      type: "number",
      name: "ram",
      label: "Enter Ram (in MB)",
      value: "1000"
    },
    {
      element: "select",
      options: ["mysql", "postgres", "mongodb"],
      name: "database",
      label: "Choose Database",
      value: "mysql"
    },
    {
      element: "radio",
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
  ]
};
