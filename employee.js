// Inquirer
const inquirer = require('inquirer');
const fs = require('fs');



class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }

     async getName() {await inquirer.prompt([
      {
        type: 'input',
        message: 'Please enter the name of the employee: ',
        name: 'name'
      }
      ]).then( (answer) => {
        this.name=answer.name;
        }
      )};

    async getId() {await inquirer.prompt([
      {
        type: 'input',
        message: 'Employee id: ',
        name: 'id',
      }
      ]).then( (answer) => {
        this.id=answer.id;
        } )
    };

    async getEmail() {await inquirer.prompt([
      {
        type: 'input',
        message: 'Employee Email:  ',
        name: 'email',
      }
      ]).then( (answer) => {
        this.email = answer.email;
        })
      };

    getRole() { return "Employee"; }
  }


  
  module.exports = Employee;

        



