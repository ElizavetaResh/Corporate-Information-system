const db = require('../db')
class TaskController {
    async createTask(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO public.task (u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo])
        res.json(newPerson)

    }
    async getTask (req, res){
        const tasks = await db.query('select em_name as employer, t_name as name, f_name as faculty, t_description as description, t_price as price, u_name as workerName, u_surname as workerSurname from faculty, task, employer, worker, public.user where (task.faculty_idfaculty = f_id) and (task.employer_idemployer=em_id) and (task.worker_idWorker = w_id) and (worker.user_iduser=public.user.id)')
        res.json(tasks.rows)

    }
    async getIdTask(req, res){
        const id = req.params.id
        const task = await db.query('SELECT * FROM public.task where id = $1', [id])
        res.json(task.rows[0])

    }
    async updateTask(req, res){
        const {u_id, u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo} = req.body
        const user = await db.query('UPDATE public.task set u_login = $1, u_password = $2, u_surname = $3, u_name = $4, u_patronymic = $5, u_email = $6, u_level = $7, u_photo = $8 where u_id = $9 RETURNING *', [u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo, u_id])
        res.json(user.rows[0])

    }

    async deleteTask(req, res) {
        const id = req.params.id
        const users = await db.query('DELETE FROM public.task where u_id = $1', [id])
        res.json(users.rows[0])
    }
    async authUser(req, res) {
        const { username, password } = req.query;
        const users = await db.query('SELECT * FROM public.task where ((u_login = $1 and u_password = $2) or (u_email = $1 and u_password = $2))', [username, password])
        //console.log(username)
        //console.log(password)
        //console.log('auth try')
        res.json(users.rows[0])
    }

}
module.exports = new TaskController()