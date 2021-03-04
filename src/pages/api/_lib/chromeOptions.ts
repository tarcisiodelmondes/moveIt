import { exec } from "child_process";
import chrome, { args, headless } from "chrome-aws-lambda";

// Eu estou utilizando o Chromium, caso você esteja utilizando o chrome
// no linux, o caminho do executavel vai estar diferente.
const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/chromium-browser", // mude caso seu caminho seja diferente
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
};

const execPath = chromeExecPaths[process.platform];

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean): Promise<Options> {
  let options: Options;

  if (isDev) {
    options = {
      args: [],
      executablePath: execPath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}
