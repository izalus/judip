import { ISidebar, IButton, IModal, IForm, IContent } from "./App.types";
import { decorate, observable, action } from "mobx";
import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";
import { defaults } from "./App.functions";
// import { cloneDeep as clone } from "lodash";

class Store {
  // Actions
  openModal = () => {
    this.modal.open = true;
  };

  closeModal = () => {
    this.modal.open = false;
  };

  onFormChange = (index: number, value: string) => {
    if (this.form[index].element === "checkbox") {
      this.form[index].value = !this.form[index].value;
    } else {
      this.form[index].value = value;
    }
  };

  setForm = (form: IForm[]) => {
    this.form = form;
  };

  setContact = (content: IContent[]) => {
    this.content = content;
  };

  setModalMeta = (title: string, buttons: IButton[]) => {
    this.modal.title = title;
    this.modal.buttons = buttons;
  };

  // Support Functions
  addNewAction = () => {
    this.setForm([
      {
        element: "input",
        type: "text",
        name: "recipe-name",
        label: "",
        value: "",
        placeholder: "Ex: python, java, akhileshns/wordpress"
      }
    ]);
    this.setContact([]);
    this.setModalMeta("Enter Recipe Name", [
      {
        name: "Close",
        task: () => this.closeModal()
      },
      {
        name: "Add",
        task: () => {}
      }
    ]);
    this.openModal();
  };

  // Observables
  sidebar: ISidebar = defaults.sidebar(Run, Add, this.addNewAction);
  modal: IModal = defaults.modal();
  form: IForm[] = defaults.form();
  content: IContent[] = defaults.contact();
}

decorate(Store, {
  openModal: action,
  closeModal: action,
  onFormChange: action,
  setForm: action,
  setContact: action,
  setModalMeta: action,

  sidebar: observable,
  modal: observable,
  form: observable,
  content: observable
});

export default new Store();
