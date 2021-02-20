// Inquirer
const inquirer = require('inquirer');
const fs = require('fs');



class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
        
    }
     async getName(person) {await inquirer.prompt([
      {
        type: 'input',
        message: `Please enter the name of the ${person}: `,
        name: 'name'
      }
      ]).then( (answer) => {
        this.name=answer.name;
        }
      )};

    async getId(person) {await inquirer.prompt([
      {
        type: 'input',
        message: `${person} ID: `,
        name: 'id',
      }
      ]).then( (answer) => {
        this.id=answer.id;
        } )
    };

    async getEmail(person) {await inquirer.prompt([
      {
        type: 'input',
        message: `${person} Email: ` ,
        name: 'email',
      }
      ]).then( (answer) => {
        this.email = answer.email;
        })
      };

    getRole() { return "Employee"; }
  }

  module.exports = Employee;

        



