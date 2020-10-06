const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the name of your repository?",
    name: "repository",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide any necessary usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide any guidelines for contributing to your project.",
    name: "guidelines",
  },
  {
    type: "input",
    message: "What are the instructions for testing your project?",
    name: "testing",
  },
  {
    type: "checkbox",
    message: "Please choose a license.",
    name: "license",
    choices: ["MIT", "Mozilla", "ODbl", "IBM"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "ghUsername",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("goodReadMe.md", generateMarkdown(fileName, data), (err) => {
    if (err) throw err;
    console.log("File written!");
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
