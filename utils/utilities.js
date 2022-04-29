const genDb = require('./dbGen');

const EmployeeData = require ('./employeedata');
const wutAct = require('./question');


const inq = require ('inquirer');
require('console.table');


/*~`~*/
var cancellor = () => {
    connection.destroy()
        process.exit(0)
}

async function dataMake() {
    try {
        const ion = genDb()
        const empData = new EmployeeData(ion)
        let exit = false
    
    while (exit === false) { 

        const act = new wutAct()
        const menu = act.menuMain() 
        const viewMenu = act.viewMenu()
        const editMenu = act.viewMenu()
    // .choices signifier used to deactivate infinite loop bug
    switch(menu.tagoutlockout) {
        case 'View Data':
            await inq.prompt(viewMenu);
                break;
        case 'Edit Data':
            await inq.prompt(editMenu);
                break;
        case 'Exit':
            cancellor();
                break;
    }
    

    switch(viewMenu) {

        case 'View all Departments':
            console.table(await empData.vwDpts())
                break;
    
        case 'View all Employees':
            console.table(await empData.vwEmps())
                break;
    
        case 'View All Roles':
            console.table(await empData.vwRls())
                break;

        case 'Exit':
            cancellor();
                break;
           
        default:
            console.log()
                break;
    }

    switch(editMenu) {
    
        case 'Add a Department':
            const dpts = act.addDptQus(/*newDeptName*/);
            console.table(await empData.addDpt(dpts.newDeptName))
                break;
    
        case 'Add an employee':
            const info = act.addEmpQus();
            const answer =  inq.prompt (info);
            console.table(await empData.addEmp(answer))
                break;
    
        case 'Add a role':
            const roleInfo = act.roleInfoQus();
            const roleAnswer = inq.prompt (roleInfo);
            console.table (await empData.addRole(roleAnswer))
                break;
    
        case 'Update / Delete an employee':
            const updateEmp =  act.updEmpQus();
            const updateAnswer = inq.prompt (updateEmp);
            console.table(await empData.updateEmp(updateAnswer))
                break;

        case 'Exit':
            cancellor();
                break;

        default:
            break;     
    }
    
    const updateEmp = act.updEmpQus()
    switch (updateEmp) {   

        case 'Delete':
            console.table( empData.vwEmps())
                const deleteEmp = act.delEmpQus();
                const deleteInfo =  inq.prompt (deleteEmp);
                console.table (await empData.deleteEmp(deleteInfo))
                    break;

        case 'Exit':
            cancellor();
                break;

        default:
            break;
    }
    
}
}
    catch (err) {
        if (err) console.log(err)
            return;
    }
 
} 


module.exports = dataMake;