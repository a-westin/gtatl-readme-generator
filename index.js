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
    type: "list",
    message: "Please choose a license.",
    name: "license",
    choices: ["MIT", "Boost Software 1.0", "The Unlicense"],
  },
  {
    type: "checkbox",
    message: "Please choose any badge(s) you'd like to add",
    name: "badges",
    choices: [
      "GitHub Issues",
      "GitHub Pull Requests",
      "Built With Love",
      "Contains Cat GIFS",
    ],
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
function writeToFile(data) {
  fs.writeFile("goodReadMe.md", generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("File written!");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile(data))
    .catch((err) => console.log(err));
}

// function call to initialize program
init();
