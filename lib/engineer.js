// Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
// Import the parent class
const Employee = require('./employee');

// Create a `Manager` class that extends the `Employee` class
class Engineer extends Employee {
    constructor(github, role) {
        const name = "";
        const id = "";
        const email = "";
        super(name,id,email)
        this.role = "Engineer";
    
    }
    async getGithub() {
        await inquirer.prompt([
        {
          type: 'input',
          message: 'Please enter GitHub username:  ',
          name: 'github'
        }
        ]).then( (answer) => {
            this.github =answer.github;
            })
        };
  }

module.exports = Engineer;


