
class EmployeeData {

constructor (ion) {
    this.db = ion
}
/* , *//* , */
    vwDpts() {
        const sqlCOM = 'SELECT * FROM departments';
        const [ row ] = await this.db.query(sqlCOM)
            return row
    }
/* , */
    vwEmps() {
        const sqlCOM = `
            SELECT employee.id, employee.last_name, employee.first_name, roles.title AS title, departments.dpt_name AS departments, roles.salary AS salary,
            CONCAT(man.last_name, ' ', man.first_name) AS manager
            FROM employee e
            LEFT JOIN roles ON e.role_id= roles.id
            LEFT JOIN departments ON roles.dpt_id = departments.id
            LEFT JOIN employee m ON m.id = e.man_id
        `
        const [ rows ] = await this.db.query(sqlCOM)
            return rows
    }        
/* , */    
    vwRls() {
        const sqlCOM = `SELECT * FROM roles`;
        const [rows]= await this.db.query(sqlCOM)
            return rows
    }
/* , */
    addEmp ({ last_name, first_name, role_id, man_id}) {
        try {
            console.log(last_name, first_name, role_id, man_id)
            const sql = `INSERT INTO employee (last_name, first_name, role_id, man_id) VALUES (?, ?, ?,?)`;
            const [ result ] = await this.db.execute(sql, [last_name,first_name, role_id, man_id])
            if (result.affectedRows === 1) 
                return this.vwEmps()
        }
        catch (error) {
            console.log(error)
                return 'enter valid roles_id or man_id\n'
        }
    }
/* , */   
    addDpt (dpts) {
        const sql = `INSERT INTO departments (dpt_name) VALUES (?)`;
        const [ result ] = await this.db.execute (sql, [dpts])
            if (result.affectedRows === 1) return this.vwDpts()
    }
/* , */   
    addRole ({title, salary, dpt_id}) {
        const sql = `INSERT INTO roles (title, salary, dpt_id) VALUES (?, ?, ?)`;
        const [ result ] = await this.db.execute (sql, [title, salary, dpt_id])
            if (result.affectedRows === 1) 
                return this.vwRls()
    }
};
    
/* , */

/* , */

/* , */

/* , */
    module.exports = EmployeeData