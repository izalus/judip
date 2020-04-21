import { Isidebar, Imodal } from "./App.types";
import { decorate, observable, action } from "mobx";
import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";

class Store {
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
        task: () => {
          this.triggerModal(this.preset(true));
        }
      }
    ]
  };

  preset = (open: boolean): Imodal => ({
    open,
    title: "Enter Recipe Name",
    buttons: [
      {
        name: "Close",
        task: () => {
          this.closeModal();
        }
      },
      {
        name: "Add",
        task: () => {}
      }
    ]
  });

  modal: Imodal = {
    open: false,
    title: "",
    buttons: []
  };

  triggerModal = (modal: Imodal) => {
    this.modal = modal;
  };

  closeModal = () => {
    this.modal.open = false;
  };
}

decorate(Store, {
  sidebar: observable,
  modal: observable,

  triggerModal: action
});

export default new Store();
