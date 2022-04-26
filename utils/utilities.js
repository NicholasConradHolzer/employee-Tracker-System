const inq = require ('inquirer');

const genDb = require('./dbGen');
const EmployeeData = require ('./employeedata');
const wutAct = require('./question');
require ('dotenv').config();

require('console.table');


function dataMake() {

    const ion = genDb()
    const empData = new EmployeeData(ion)

    const menu = wutAct.menuMain();     

    switch(menu.choices) {

        case 'View all Departments':
            console.table(empData.vwDpts())
                break;
    
        case 'Add a Department':
            const dpts = wutAct.addDptQus(/*newDeptName*/);
            console.table(empData.addDpt(dpts.newDeptName))
                break;
    
        case 'View all Employees':
            console.table(empData.vwEmps())
                break;
    
        case 'Add an employee':
            const info = wutAct.addEmpQus();
            const answer =  inq.prompt (info);
            console.table(empData.addEmp(answer))
                break;
    
        case 'View All Roles':
            console.table(empData.vwRls())
                break;
    
        case 'Add a role':
            const roleInfo = wutAct.roleInfoQus();
            const roleAnswer = inq.prompt (roleInfo);
            console.table (empData.addRole(roleAnswer))
                break;
    
        case 'Update / Delete an employee':
            const updateEmp =  wutAct.updEmpQus();
            const updateAnswer = inq.prompt (updateEmp);
            console.table( empData.updateEmp(updateAnswer))

        default:
            break;
                
    }
    
    const updateEmp = wutAct.updEmpQus()
    switch (updateEmp.choice) {   

        case 'Delete':
            console.table( empData.vwEmps())
                const deleteEmp = wutAct.delEmpQus();
                const deleteInfo =  inq.prompt (deleteEmp);
                console.table ( empData.deleteEmp(deleteInfo))
                    break;

        case 'Exit':
            ion.destroy()
                process.exit(0)

        default:
            break;
    
    }

}


module.exports = dataMake;