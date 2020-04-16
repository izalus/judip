import { decorate, observable } from "mobx";

interface Iconfig {
  path: string;
}

class Store {
  config: Iconfig = {
    path: "/"
  };
}

decorate(Store, {
  config: observable
});

export default new Store();
