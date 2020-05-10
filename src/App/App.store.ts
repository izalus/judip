import { ISidebar, IButton, IModal, IForm, IContent, ICode } from "./App.types";
import { decorate, observable, action } from "mobx";
import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";
import { defaults } from "./App.functions";
// import { cloneDeep as clone } from "lodash";

const { dialog } = window.require("electron").remote;
const child_process = window.require("child_process");
const util = window.require("util");
const exec = util.promisify(child_process.exec);
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

  setCode = (code: ICode) => {
    this.code = code;
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

  createProject = async () => {
    const path = await dialog.showOpenDialog({
      properties: ["openDirectory"]
    });

    this.setCode({
      name: this.form[0].value.toString(),
      location: path.filePaths[0]
    });

    this.closeModal();

    await exec("judip create " + this.form[0].value.toString(), {
      cwd: path.filePaths[0]
    });
  };

  // Observables
  sidebar: ISidebar = defaults.sidebar(Run, Add, this.addNewAction);
  modal: IModal = defaults.modal();
  form: IForm[] = defaults.form();
  content: IContent[] = defaults.contact();
  code: ICode = defaults.code();
}

decorate(Store, {
  openModal: action,
  closeModal: action,
  onFormChange: action,
  setForm: action,
  setContact: action,
  setModalMeta: action,
  setCode: action,

  sidebar: observable,
  modal: observable,
  form: observable,
  content: observable,
  code: observable
});

export default new Store();
