import React, { useEffect } from "react";
import { observer } from "mobx-react";

import Store from "./App.store";
import { checkDependencies } from "./App.functions";
import { IForm, IContent, IButton, ICode } from "./App.types";

interface IProps {
  code: ICode;
  form: IForm[];
  setCode: (code: ICode) => void;
  setForm: (form: IForm[]) => void;
  setContact: (content: IContent[]) => void;
  setModalMeta: (title: string, buttons: IButton[]) => void;
  openModal: () => void;
  closeModal: () => void;
  createProject: () => void;
  getBlocks: () => void;
}

export const Controller: React.FC<IProps> = observer(props => {
  useEffect(() => {
    console.log(
      "Check Dependencies, Install Them if they don't exist and start them if they aren't running"
    );

    (async () => {
      const { isGit, isNode, isJudip, isDocker } = await checkDependencies();
      console.log({ isGit, isNode, isJudip, isDocker });
      if (!isGit || !isNode || !isJudip || !isDocker) {
        props.setModalMeta("Missing Dependencies", []);
        props.setForm([]);
        props.setContact([
          {
            element: "text",
            value: `The following dependencies were found missing on your machine:-

            ${isGit ? "- git" : null}
            ${isNode ? "- node" : null}
            ${isJudip ? "- judip cli" : null}
            ${isDocker ? "- docker" : null}
            
            Please make sure they have been installed and are running`
          }
        ]);
        props.openModal();
      } else if (props.code.name === "" || props.code.location === "") {
        props.setContact([]);
        props.setForm([
          {
            name: "project-name",
            element: "input",
            type: "text",
            label: "Enter project name",
            value: ""
          }
        ]);
        props.setModalMeta("Project Details", [
          {
            name: "Save",
            task: props.createProject
          }
        ]);
        props.openModal();
      } else {
        props.getBlocks();
      }
    })();
  }, []);

  return null;
});

export default observer(() => (
  <Controller
    code={Store.code}
    form={Store.form}
    setCode={Store.setCode}
    setForm={Store.setForm}
    setContact={Store.setContact}
    setModalMeta={Store.setModalMeta}
    openModal={Store.openModal}
    closeModal={Store.closeModal}
    createProject={Store.createProject}
    getBlocks={Store.getBlocks}
  />
));
