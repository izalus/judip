// IMPORTS
const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
require("update-electron-app")({
  repo: "kitze/react-electron-example",
  updateInterval: "1 hour"
});

// VARIABLES
let mainWindow;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// SUPPORT FUNCTIONS
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    frame: false,
    webPreferences: { nodeIntegration: true }
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

// EVENT HANDLERS
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
