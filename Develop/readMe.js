const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "project title:",
  },
  {
    type: "input",
    name: "description",
    message: "project description:",
  },
  {
    type: "input",
    name: "badges",
    message: "project badges:",
  },
  {
    type: "editor",
    name: "installation",
    message: "installation steps:",
  },
  {
    type: "editor",
    name: "usage",
    message: "instructions:",
  },
  {
    type: "input",
    name: "license",
    message: "project license: (ISC)",
    default: "ISC",
  },
  {
    type: "editor",
    name: "contributing",
    message: "contributing instructions:",
  },
  {
    type: "editor",
    name: "tests",
    message: "project tests:",
  },
  {
    type: "input",
    name: "profile_picture",
    message: "profile picture url:",
  },
  {
    type: "input",
    name: "gh_email",
    message: "GitHub email:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) console.log("Can't save file due to error: " + error);
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

init();
