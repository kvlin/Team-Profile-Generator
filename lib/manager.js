// Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
// Import the parent class
const Employee = require('./employee');

// Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(officeNumber, role) {
        const name = "";
        const id = "";
        const email = "";
        super(name,id,email)
        this.officeNumber = officeNumber;
        this.role = "Manager";
    
    }
    async getOfficeNumber() {
        await inquirer.prompt([
        {
          type: 'input',
          message: 'Please enter office number:  ',
          name: 'officeNumber'
        }
        ]).then( (answer) => {
            this.officeNumber=answer.officeNumber;
            })
        };
  }

module.exports = Manager;


