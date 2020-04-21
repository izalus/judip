import { Iconfig, Isidebar, Imodal } from "./App.types";
import { decorate, observable, action } from "mobx";
import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";

class Store {
  config: Iconfig = {
    path: "/"
  };

  sidebar: Isidebar = {
    actions: [
      {
        Icon: Run,
        name: "Run All",
        task: () => {}
      },
      {
        Icon: Add,
        name: "New",
        task: () => this.triggerModal(true)
      }
    ]
  };

  modal: Imodal = {
    open: true
  };

  triggerModal = (open: boolean) => {
    this.modal.open = open;
  };
}

decorate(Store, {
  config: observable,
  sidebar: observable,
  modal: observable,

  triggerModal: action
});

export default new Store();
