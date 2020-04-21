import { Isidebar, Imodal, Iform } from "./App.types";
import { decorate, observable, action } from "mobx";
import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";
import { defaults } from "./App.functions";
import { cloneDeep } from "lodash";

class Store {
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

  setForm = (form: Iform[]) => {
    this.form = form;
  };

  sidebar: Isidebar = defaults.sidebar(Run, Add, this.openModal);
  modal: Imodal = defaults.modal(this.closeModal);
  form: Iform[] = defaults.form();
}

decorate(Store, {
  openModal: action,
  closeModal: action,
  onFormChange: action,
  setForm: action,

  sidebar: observable,
  modal: observable,
  form: observable
});

export default new Store();
