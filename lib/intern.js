// Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
// Import the parent class
const Employee = require('./employee');

// Create a `Manager` class that extends the `Employee` class
class Intern extends Employee {
    constructor(school, role) {
        const name = "";
        const id = "";
        const email = "";
        super(name,id,email)
        this.school = school;
        this.role = "Intern";
    
    }
    async getSchool() {
        await inquirer.prompt([
        {
          type: 'input',
          message: 'Please entern shool name:  ',
          name: 'school'
        }
        ]).then( (answer) => {
            this.school=answer.school;
            })
        };
  }

module.exports = Intern;


