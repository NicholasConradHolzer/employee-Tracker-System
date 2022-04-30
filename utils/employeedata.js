class EmployeeData {
    
    constructor (ion) {
        this.db = ion
    }
    /* , *//* , */
        vwDpts() {
            const sqlCOM = `
                SELECT * FROM department
            `;
            const [ row ] = this.db.query(sqlCOM)
                return row
        }
    /* , */   
        vwRls() {
            const sqlCOM = `
                SELECT * FROM roles
            `;
            const [ rows ]= this.db.query(sqlCOM)
                return rows
        }
    /* , */
        vwEmps() {
            const sqlCOM = `
                SELECT * FROM employee
            `;
            // `
            //     SELECT employee.last_name, employee.first_name, employee.id, 
            //     roles.title AS title, 
            //     department.dpt_name AS department, 
            //     roles.salary AS salary,
            //     CONCAT(man.first_name, ' ', man.last_name) AS manager
            //     FROM employee e
            //     LEFT JOIN roles ON e.role_id= roles.id
            //     LEFT JOIN department ON roles.dpt_id = department.dpt_id
            //     LEFT JOIN employee m ON m.id = e.man_id
            // `
            const [ rows ] = this.db.query(sqlCOM)
                return rows
        }        
    /* , */ 
        addDpt (dpts) {
            const sql = `
                INSERT INTO department (dpt_name) VALUES (?)
            `;

            const [ result ] = this.db.execute (sql, [dpts])
                if (result.affectedRows === 1) return this.vwDpts()
        }
    /* , */
        addRole ({title, salary, dpt_id}) {
            const sql = `
                INSERT INTO roles (title, salary, dpt_id) VALUES (?, ?, ?)
            `;

            const [ result ] = this.db.execute (
                sql, [title, salary, dpt_id]
            )
                if (result.affectedRows === 1) 
                    return this.vwRls()
        }
    /* , */
        addEmp ({ last_name, first_name, role_id, dpt_id, man_id }) {
            try {
                console.log(last_name, first_name, role_id, dpt_id, man_id )
                const sql = `
                    INSERT INTO employee (last_name, first_name, role_id, dpt_id, man_id) VALUES (?, ?, ?, ?, ?)
                `;
                const [ result ] = this.db.execute(
                    sql, [last_name, first_name, role_id, dpt_id, man_id]
                )
                    if (result.affectedRows === 1) 
                        return this.vwEmps()
            }

            catch (error) {
                console.log(error)
                    return 'enter valid id'
            }
        }
    /* , */
        deleteEmp ({last_name, first_name, role_id, dpt_id, man_id }) {
            try {
                console.log(last_name, first_name, role_id, dpt_id, man_id )
                const sql = `
                    DELETE FROM employee (last_name, first_name, role_id, dpt_id, man_id) VALUES (?, ?, ?,?)
                `;

                const [ result ] = this.db.execute(
                    sql, [last_name, first_name, role_id, dpt_id, man_id ]
                )
                if (result.affectedRows === 1) 
                    return this.vwEmps()
            }
            catch (err) {
                console.log(err)
                    return;
            }
        }
};
    
/* , */

/* , */

/* , */
module.exports = EmployeeData