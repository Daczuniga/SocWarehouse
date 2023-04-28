const inquirer = require('inquirer');
//const db = require('./connection');


function start() {
    inquirer.prompt({
        type: 'list',
        name: 'userChoice',
        message: 'What would you like to do?',
        choices: ["View Departments", "View Roles", "View Employees", "Exit"]
    }).then(answer => {
        console.log("User Answer: ", answer);  // --> { userChoice: "View Departments"}

        // Based on the User input what should we do? //
        if(answer.userChoice === "View Departments") {
            findDepartments();
        } else if(answer.userChoice === "View Roles") {
            findRoles();
        }

    }).catch(error => {
        throw error;
    })
}


function findDepartments() {
    console.log("Finding Department Data in DB..")

    // All of our requests to the DATABASE are AYSNC
/*    db.query("SELECT id, name FROM department;", function(error, data) {
        if(error) {
            throw error;
        }
        console.log("Data: ", data); 

        // after we show the data we need to prompt the user for what to do next
        start()
    })
    */

    start();
}


start();