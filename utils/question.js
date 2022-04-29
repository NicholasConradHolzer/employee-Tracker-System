
const inq = require ('inquirer');

class wutAct {

    menuMain() { 
         inq.prompt ({
            type: 'list',
            name: 'Menu',
            message: 'Manage Employee Data:',
            choices: [
                'View Data',
                'Edit Data',
                'Exit'
            ]
        })
    }
/* , */
    viewMenu() { 
         inq.prompt ({
            type: 'list',
            name: 'View_Menu',
            message: 'View Employee Data:',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Exit'
            ]
        })
    }
/* , */
    editMenu() { 
         inq.prompt ({
            type: 'list',
            name: 'Edit_Menu',
            message: 'Manage Employee Data:',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update/Delete Employee',
                'Exit'
            ]
        })
    }
/* , */
    addDptQus() {
         inq.prompt ({
            type:'input',
            message: 'What is the name of the new department?',
            name: 'newDeptName',
            validate: (name) => name !== ""
        })
    }
/* , */
    addEmpQus() {
        [
            {
                type: 'input',
                name: 'first_name',
                message: "What is the employee's first name?",
                validate: (answer) => answer !== '',
            },
            {
                type:'input',
                name: 'last_name',
                message: "What is the employee's last name?",
                validate: (answer) => answer !== '',
            },
            {
                type: 'input',
                name: 'role_id',
                message: "What is the employee's role id",
                validate: (answer) => answer !== '',
            },
            {
                type:'input',
                name: 'manager_id',
                message: "What is the manager_id?",
                validate: (answer) => answer !== '',
            },
        ]
    }
/* , */
    roleInfoQus() {
        [
            {
                type: 'input',
                name: 'title',
                message: "What is the new Role title?",
                validate: (answer) => answer !== '',
            },
            {
                type: 'input',
                name: 'salary',
                message: "What's the new Role's salary?",
                validate: (answer)=> answer !== '',
            },
            {
                type: 'number',
                name: 'dpt_id',
                message: "What is the department ID? (listed as dpt_id)",
                validate: (answer)=> answer !== ''
            }
        ]
    }
/* , */
    updEmpQus() {
        inq.prompt(
            {
                type: 'list',
                name: 'update/delete',
                message: "Update or Delete employee?",
                choices: [
                    'Update',
                    'Delete'
                ]
            }
        )
    }
/* , */
    delEmpQues() {
        inq.prompt(
            {
                type: 'input',
                name: 'delete',
                message: "What Employee would you like to delete? (Enter Employee ID)",
                    validate: (answer) => answer !== ''
            }
        )
    }

}

module.exports = wutAct