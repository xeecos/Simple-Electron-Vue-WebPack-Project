import { app, BrowserWindow } from "electron";
import path from "path";

const ROOT_PATH = "file://" + path.resolve("");
app.on("ready", function() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.openDevTools();
    mainWindow.loadURL(`${ROOT_PATH}/dist/client/html/index.html`);
});