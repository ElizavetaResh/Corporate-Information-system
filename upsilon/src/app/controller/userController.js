const db = require('../db')
class UserController {
    async createUser(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO public.user (u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo])
        res.json(newPerson)

    }
    async getUsers (req, res){
        const users = await db.query('SELECT * FROM public.user')
        res.json(users.row)

    }
    async getOneUser(req, res){
        const id = req.params.id
        const users = await db.query('SELECT * FROM public.user where u_id = $1', [id])
        res.json(users.rows[0])

    }
    async updateUser(req, res){
        const {u_id, u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo} = req.body
        const user = await db.query('UPDATE public.user set u_login = $1, u_password = $2, u_surname = $3, u_name = $4, u_patronymic = $5, u_email = $6, u_level = $7, u_photo = $8 where u_id = $9 RETURNING *', [u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo, u_id])
        res.json(user.rows[0])

    }

    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query('DELETE FROM public.user where u_id = $1', [id])
        res.json(users.rows[0])
    }
    async authUser(req, res) {
        const { username, password } = req.body;
        const users = await db.query('SELECT * FROM public.user where ((u_login = $1 and u_password = $2) or (u_email = $1 and u_password = $2))', [username, password])
        console.log(username)
        console.log(password)
        console.log('auth try')
        res.json(users.rows[0])
    }

}
module.exports = new UserController()