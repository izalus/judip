import {
  ISidebar,
  IButton,
  IModal,
  IForm,
  IContent,
  ICode,
  IBlock
} from "./App.types";
import { decorate, observable, action } from "mobx";
import { IoIosPlay as Run, IoIosAdd as Add } from "react-icons/io";
import { defaults } from "./App.functions";
// import { cloneDeep as clone } from "lodash";

const fs = window.require("fs-extra");
const path = window.require("path");
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

  setBlockTab = (index: number, tabIndex: number, value: string) => {
    this.blocks[index].tabs[tabIndex].value = value;
  };

  setBlockLogs = (index: number, value: string) => {
    this.blocks[index].logs = value;
  };

  syncBlocks = async () => {
    try {
      const project = await fs.readJson(
        path.join(this.code.location, "judip.json")
      );
      this.syncedBlocks = project.blocks;
    } catch (err) {
      console.log(err);
    }
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
        task: async () => {
          try {
            let value = this.form[0].value.toString().toLowerCase();
            if (value.includes(":") && value.includes("/")) {
              const [database, reponame] = value.split(":");
              const [author, name] = reponame.split("/");
              value = `https://${database}.com/${author}/${name}`;
            } else if (value.includes("/")) {
              const [author, name] = value.split("/");
              value = `https://github.com/${author}/${name}`;
            } else {
              value = `https://github.com/izalus/${value}`;
            }

            await exec("judip pull " + value, {
              cwd: this.code.location
            });
            const { stdout } = await exec("judip get " + value, {
              cwd: this.code.location
            });
            const newForm = JSON.parse(stdout.toString());
            this.setForm(newForm);
            this.setModalMeta("Enter Details", [
              {
                name: "Close",
                task: () => this.closeModal()
              },
              {
                name: "Add",
                task: async () => {
                  interface IOutputs {
                    [key: string]: string | boolean;
                  }

                  let outputs: IOutputs = {};
                  this.form.forEach(({ name, value }) => {
                    outputs[name] = value;
                  });

                  await exec(
                    `judip add -o ${JSON.stringify(outputs).replace(
                      /"/g,
                      '\\"'
                    )} ${value}`,
                    {
                      cwd: this.code.location
                    }
                  );

                  this.getLatestBlock();
                  this.closeModal();
                }
              }
            ]);
          } catch (err) {
            console.log(err);
          }
        }
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

  getLatestBlock = async () => {
    try {
      let index = -1;
      const project = await fs.readJson(
        path.join(this.code.location, "judip.json")
      );
      project.blocks.forEach((block: any, i: number) => {
        if (project.count.toString() === block.id.toString()) {
          index = i;
        }
      });
      if (index !== -1) {
        this.blocks.push(project.blocks[index]);
        this.syncedBlocks.push(project.blocks[index]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  saveBlock = async (index: number) => {
    try {
      const project = await fs.readJson(
        path.join(this.code.location, "judip.json")
      );
      project.blocks[index] = this.blocks[index];
      this.syncedBlocks = project.blocks;
      await fs.writeJson(path.join(this.code.location, "judip.json"), project);
    } catch (err) {
      console.log(err);
    }
  };

  getBlocks = async () => {
    try {
      const project = await fs.readJson(
        path.join(this.code.location, "judip.json")
      );
      this.blocks = project.blocks;
      this.syncedBlocks = project.blocks;
    } catch (err) {
      console.log(err);
    }
  };

  getBlock = async (index: number) => {
    try {
      const project = await fs.readJson(
        path.join(this.code.location, "judip.json")
      );
      this.blocks[index] = project.blocks[index];
      this.syncedBlocks[index] = project.blocks[index];
    } catch (err) {
      console.log(err);
    }
  };

  runBlock = async (index: number) => {
    try {
      await this.saveBlock(index);
      await exec(`judip run -b ${this.blocks[index].id} `, {
        cwd: this.code.location
      });
      await this.getBlock(index);
    } catch (err) {
      console.log(err);
    }
  };

  // Observables
  sidebar: ISidebar = defaults.sidebar(Run, Add, this.addNewAction);
  modal: IModal = defaults.modal();
  form: IForm[] = defaults.form();
  content: IContent[] = defaults.contact();
  code: ICode = defaults.code();
  blocks: IBlock[] = defaults.blocks();
  syncedBlocks: IBlock[] = defaults.blocks();
}

decorate(Store, {
  openModal: action,
  closeModal: action,
  onFormChange: action,
  setForm: action,
  setContact: action,
  setModalMeta: action,
  setCode: action,
  setBlockTab: action,
  setBlockLogs: action,
  syncBlocks: action,
  addNewAction: action,
  createProject: action,
  saveBlock: action,
  getBlocks: action,
  getBlock: action,
  runBlock: action,
  getLatestBlock: action,

  sidebar: observable,
  modal: observable,
  form: observable,
  content: observable,
  code: observable,
  blocks: observable,
  syncedBlocks: observable
});

export default new Store();
