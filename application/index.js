let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown.js");

function promptUserInfo(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What's your Github user?"
        },
        {
            type: "input",
            name: "description",
            message: "What's your project about?"
        },
        {
            type: "input",
            name: "title",
            message: "What's your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Share some steps to install your project"
        },
        {
            type: "input",
            name: "usage",
            message: "How can we use your app?"
        },
        {
            type: "input",
            name: "credits",
            message: "List your contributors to give some credit"
        },
        {
            type: "list",
            name: "licence",
            message: "Include a license",
            choices: ["MIT", "APACHE 2.0", "GPL v3, BSD 3", "None"]
        },
        {
            type: "input",
            name: "testing",
            message: "How can a user run a test?"
        },

    ]);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err){
        if(err) {
            throw err;
        }
        console.log("Now you have a README file :)")
    })
}

async function init() {
    try {
        const userAnswers = await promptUserInfo();
        generateMarkdown(userAnswers);
        writeToFile("README.md", generateMarkdown(userAnswers));
        console.log("SUCCESS!");
    } catch(err) {
        console.log(err);
    }
};

init();