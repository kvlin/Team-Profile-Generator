// Inquirer

const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let manager = new Manager ();
const generateHTML = (manager) => (
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documenttttttttt</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
<h1 class = 'team' >My Team</h1>
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">${manager.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item"><span>Email: </span><a href= "mailto: ${manager.email}">${manager.email}</a></li>
      <li class="list-group-item"><span>Office number: ${manager.officeNumber}</span></li>

    </ul>
  </div>`
)


const newEmployeeOrExit = () => 
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next? ',
            name: 'next',
            choices: [
                'Add a new engineer',
                'Add a new intern',
                'Finish and exit the application'
            ]
        }
    ]);
    let currentRole = "Manager"
async function init () {
    await manager.getId(currentRole);
    await manager.getName(currentRole)
    await manager.getEmail(currentRole)
    await manager.getOfficeNumber(currentRole)
    addToHTML = generateHTML(manager)
}


const engineerElements = (newEngineer)=> 
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newEngineer.name}</h5>
      <p class="card-text">${newEngineer.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${newEngineer.id}</li>
      <li class="list-group-item"><span>Email: </span><a href= "mailto: ${newEngineer.email}">${newEngineer.email}</a></li>
      <li class="list-group-item"><span>GitHub: </span><a href= "${newEngineer.github}">${newEngineer.github}</a></li>
    </ul>
  </div>`;
    
const internElements = (newIntern)=> 
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newIntern.name}</h5>
      <p class="card-text">${newIntern.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${newIntern.id}</li>
      <li class="list-group-item"><span>Email: </span><a href= "mailto: ${newIntern.email}">${newIntern.email}</a></li>
      <li class="list-group-item"><span>School: </span><a href= "${newIntern.school}">${newIntern.school}</a></li>
    </ul>
  </div>`;

let addToHTML = generateHTML(manager)

async function getEngineerInfo(engineer) {
    currentRole = "Engineer"
    await engineer.getName(currentRole)
    await engineer.getId(currentRole);
    await engineer.getEmail(currentRole)
    await engineer.getGithub(currentRole)
    newEmployeeOrExit().then((answer) => { 
        if(answer.next === "Add a new engineer"){
            currentRole = "Engineer"
            let newEngineer = new Engineer ();            
            getEngineerInfo(newEngineer).then((answer) => {
                const addEngineer = engineerElements (newEngineer)
                addToHTML = addToHTML.concat(addEngineer)
                fs.writeFileSync('index.html', addToHTML)
        })
        } 
        else if (answer.next === "Add a new intern") {
            currentRole = "Intern"
            let newIntern = new Intern (); 
            getInternInfo(newIntern).then((answer) => {
                const addIntern = internElements (newIntern)
                addToHTML = addToHTML.concat(addIntern)
                fs.writeFileSync('index.html', addToHTML)
            })
        } else {
            addToHTML = addToHTML.concat(
                `
                </body>
                </html>`)
            fs.writeFileSync('index.html', addToHTML)
        } 
    }) 
}

async function getInternInfo(intern) {
    currentRole = "Intern"
    await intern.getName(currentRole)
    await intern.getId(currentRole);
    await intern.getEmail(currentRole)
    await intern.getSchool()
    newEmployeeOrExit().then((answer) => {
        if(answer.next === "Add a new engineer"){
            currentRole = "Engineer"
            let newEngineer = new Engineer ();            
            getEngineerInfo(newEngineer).then((answer) => {
                const addEngineer = engineerElements (newEngineer)
                addToHTML = addToHTML.concat(addEngineer)
                fs.writeFileSync('index.html', addToHTML)
            })
        }
        else if (answer.next === "Add a new intern") {
            currentRole = "Intern"
            const newIntern = new Intern ();
            getInternInfo(newIntern).then((answer) => {
                const addIntern = internElements (newIntern)
                addToHTML = addToHTML.concat(addIntern)
            fs.writeFileSync('index.html', addToHTML)
            })
        }  else {
            addToHTML = addToHTML.concat(
            `
            </body>
            </html>`)
            fs.writeFileSync('index.html', addToHTML)
        } 
})

}

init().then(() => {
         try {
            newEmployeeOrExit().then((answer) => {
                    if(answer.next === "Add a new engineer"){
                        currentRole = "Engineer"
                        const newEngineer = new Engineer ();
                        getEngineerInfo(newEngineer).then((answer) => {
                        const addEngineer = engineerElements (newEngineer)
                        addToHTML = addToHTML.concat(addEngineer)
                        fs.writeFileSync('index.html', addToHTML)
                        })      
                    } 
                    else if (answer.next === "Add a new intern") {
                        currentRole = "Intern"
                        const newIntern = new Intern ();
                        getInternInfo(newIntern).then((answer) => {
                        const addIntern = internElements (newIntern)
                        addToHTML = addToHTML.concat(addIntern)
                        fs.writeFileSync('index.html', addToHTML)
                }) 
            }  else {
                addToHTML = addToHTML.concat(
                    `</body>
                    </html>`)
                fs.writeFileSync('Example_index.html', addToHTML)
            } 

        })
    }
        catch (error) {
            console.log(error);
        }
       
});

