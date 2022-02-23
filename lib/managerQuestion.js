const managerQuestion = [
    {
        type: 'input',
        message: 'Enter the name of the Manager: ',
        name: 'name',
        validate: (name) => {
            return (name) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the ID of the Manager: ',
        name: 'id',
        validate: (id) => {
            return (id) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the Email of the Manager: ',
        name: 'email',
        validate: (email) => {
            return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the Office Number of the Manager: ',
        name: 'officeNumber',
        validate: (officeNumber) => {
            return (officeNumber) ? (true) : (false);
        }
    }
];

module.exports = managerQuestion;