const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your title?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of the proejct",
    },
    {
      type: "editor",
      name: "table",
      message: "Write table of contents?",
    },
    {
      type: "editor",
      name: "installation",
      message: "What is the installation process?",
    },
    {
      type: "editor",
      name: "usage",
      message: "What is this used for?",
    },
    {
      type: "input",
      name: "license",
      message: "Are there any license?",
    },
    {
      type: "editor",
      name: "contributing",
      message: "Who is contributing?",
    },
    {
      type: "editor",
      name: "tests",
      message: "Type out any tests done",
    },
    {
      type: "Editor",
      name: "questions",
      message: "Questions?",
    },
  ]);
}
