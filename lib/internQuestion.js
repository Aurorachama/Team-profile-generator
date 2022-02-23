const internQuestion = [
    {
        type: 'input',
        message: 'Enter the name of the Intern: ',
        name: 'name',
        validate: (name) => {
            return (name) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the ID of the Intern: ',
        name: 'id',
        validate: (id) => {
            return (id) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the Email of the Intern: ',
        name: 'email',
        validate: (email) => {
            return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? (true) : (false);
        }
    },
    {
        type: 'input',
        message: 'Enter the School of the Intern: ',
        name: 'school',
        validate: (school) => {
            return (school) ? (true) : (false);
        }
    }
];

module.exports = internQuestion;