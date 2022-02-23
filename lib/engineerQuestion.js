const engineerQuestion = [
    {
        type: 'input',
        message: 'Enter the name of the Engineer: ',
        name: 'name',
        validate: (name) => {
            return (name) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the ID of the Engineer: ',
        name: 'id',
        validate: (id) => {
            return (id) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the Email of the Engineer: ',
        name: 'email',
        validate: (email) => {
            return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the GitHub username of the Engineer: ',
        name: 'github',
        validate: (github) => {
            return (github) ? (true) : (false);
        }
    }
];

module.exports = engineerQuestion;