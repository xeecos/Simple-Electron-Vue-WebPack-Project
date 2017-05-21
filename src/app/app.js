import { app, BrowserWindow } from "electron";
import path from "path";

const ROOT_PATH = "file://" + path.join($dirname, "/../");
app.on("ready", function() {
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 800
    });
    if (process.platform == 'darwin') {
        BrowserWindow.addDevToolsExtension(`~/Library/Application Support/Google/Chrome/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/3.1.2_0`);
    }
    mainWindow.openDevTools();
    mainWindow.loadURL(`${ROOT_PATH}/client/html/index.html`);
});
