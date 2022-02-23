const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerQuestion = require('./lib/managerQuestion');
const engineerQuestion = require('./lib/engineerQuestion');
const internQuestion = require('./lib/internQuestion');
const addEmployee = require('./lib/employeeQuestion');

const generateHTML = require('./src/outputTemplate');

const init = async () => {
    const engineerArray = [];
    const internArray = [];

    const managerdata = await inquirer.prompt(managerQuestion);
    const teamManager = new Manager (managerdata.name, managerdata.id, managerdata.email, managerdata.officeNumber);

    let addMember = true;
    while (addMember) {
        let newEmployee = (await inquirer.prompt(addEmployee)).newEmployee;
        
        switch (newEmployee) {
            case 'None':
                addMember = false;
            break;
            case 'Engineer':
                console.log('adding new Engineer');
                const engineerData = await inquirer.prompt(engineerQuestion);
                const newEngineer = new Engineer (engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                engineerArray.push(newEngineer);
            break;
            case 'Intern':
                console.log('adding new Intern');
                const internData = await inquirer.prompt(internQuestion);
                const newIntern = new Intern (internData.name, internData.id, internData.email, internData.school);
                internArray.push(newIntern);
        }
    }

    const outputHTML = generateHTML(teamManager, engineerArray, internArray);

    const filename = `${managerdata.name.split(' ').join('')}.html`;
    fs.writeFile(`./output/${filename}`, outputHTML, err => {
        (err) ? (console.log(err)) : (console.log(`Successfully generated HTML!`));
    });
};

init();