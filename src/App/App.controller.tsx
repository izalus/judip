import React, { useEffect } from "react";
import { observer } from "mobx-react";

import Store from "./App.store";
import { checkDependencies } from "./App.functions";
import { IForm, IContent, IButton } from "./App.types";

interface IProps {
  setForm: (form: IForm[]) => void;
  setContact: (content: IContent[]) => void;
  setModalMeta: (title: string, buttons: IButton[]) => void;
  openModal: () => void;
  closeModal: () => void;
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
      }
    })();
  }, []);

  return null;
});

export default observer(() => (
  <Controller
    setForm={Store.setForm}
    setContact={Store.setContact}
    setModalMeta={Store.setModalMeta}
    openModal={Store.openModal}
    closeModal={Store.closeModal}
  />
));
