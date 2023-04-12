const db = require('../db')
class RezumeController {
    async createRezume(req, res){
        const {name, surname} = req.body
        const newPerson = await db.query('INSERT INTO public.task (u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [u_login, u_password, u_surname, u_name, u_patronymic, u_email, u_level, u_photo])
        res.json(newPerson)

    }
    async getRezume(req, res){
        const rezumes = await db.query('select u_name as seekername, f_name as faculty, ed_name as education, s_description as description, u_surname as seerkerSurnamefrom faculty, seeker, education, public.user where (seeker.faculty_idfaculty = f_id) and (seeker.education_ideducation=ed_id) and (seeker.user_iduser=public.user.id)')
        res.json(rezumes.rows)

    }
}
module.exports = new RezumeController()