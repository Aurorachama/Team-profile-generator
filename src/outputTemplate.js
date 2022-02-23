const generateEngineer = require('./engineerTemplate');
const generateIntern = require('./internTemplate');
const generateManager = require('./managerTemplate');

module.exports = (teamManager, engineerArray, internArray) => {
    const managerHTML = generateManager(teamManager);
    const engineerHTML = generateEngineer(engineerArray);
    const internHTML = generateIntern(internArray);

    console.log(`generated HTML elements`);

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <section class="hero has-text-centered has-background-link margin-bottom">
            <div class="hero-body">
            <h1 class="title has-text-white">${teamManager.name}'s Team</h1>
            </div>
        </section>
        <section class="columns">
            ${managerHTML}
            ${engineerHTML}
            ${internHTML}
        </section>
    </body>
    </html>
    `
};

