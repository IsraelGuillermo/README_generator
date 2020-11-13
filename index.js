const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("util");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache", "BSD", "GPL", "Apache 2", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution",
  },
];

// function to write README file
// function writeToFile(filename, data) {
//   fs.writeFile("./utils");
// }
const writeToFile = utils.promisify(fs.writeFile);

const prompUser = () => {
  return inquirer.prompt(questions);
};

// function to initialize program
const init = async () => {
  try {
    const data = await prompUser();
    const README = generateMarkdown(data);
    await writeToFile("README.md", README);
    console.log("Success");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
