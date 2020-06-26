const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: " What is your project title:",
    validate: validateNonEmpty,
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description:",
    validate: validateNonEmpty,
  },
  {
    type: "input",
    name: "badges",
    message: "Provide any badges:",
    validate: validateNonEmpty,
  },
  {
    type: "editor",
    name: "installation",
    message: "installation steps:",
    validate: validateNonEmpty,
  },
  {
    type: "editor",
    name: "usage",
    message: "What is this used for?",
  },
  {
    type: "editor",
    name: "license",
    message: "project license:",
    default: "MIT",
  },
  {
    type: "editor",
    name: "contributing",
    message: "Who are the contributors?",
  },
  {
    type: "editor",
    name: "tests",
    message: "Any Tests performed? ",
  },
  {
    type: "input",
    name: "questions",
    message: "Questions:",
  },
  {
    type: "editor",
    name: "profile_picture",
    message: "Provide relative path of profile picture.",
  },
  {
    type: "input",
    name: "gh_email",
    message: " Provide your GitHub email:",
    validate: validateEmail,
  },
];
function validateNonEmpty(input) {
  return !input || input === "" ? "Invalid input" : true;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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
