import { colors } from "global/constants";

let customTitlebar = window.require("custom-electron-titlebar");
let MyTitleBar = new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex(colors.primary_dark),
  shadow: true
});
MyTitleBar.updateTitle("JUDIP");
