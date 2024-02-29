const {pool} = require("../../database");

const getmedia = async (req, res) =>
{
    try{
        let sql, result;
        if(req.query.id == null){
            result = {headers: null, body:{"response":"la peticion no es correcta"}};
        }else{
            sql = "SELECT AVG(mark) FROM Marks WHERE student_id = " + req.query.id;
            // console.log(sql);
            [result] = await pool.query(sql);
        } 
        res.send(result)
    }catch(err){
        console.log(err);
    }
}

const getAsig = async (req, res )=>
{
    try{ 
        let sql,result;
        if (req.query.id == null){
            result = {headers: null, body:{"response":"la peticion no es correcta"}};
            console.log(req.query.id)
        }else{
            sql = "SELECT DISTINCT subjects.title, students.first_name, students.last_name FROM subjects INNER JOIN marks ON subjects.subject_id = marks.subject_id INNER JOIN students ON marks.student_id = students.student_id WHERE students.student_id = " + req.query.id;
            [result] = await pool.query(sql);
        }
        res.send(result)
    }catch(err){
        console.log(err);
    }
}

const getAll =  async (req,res) =>
{
    try{
        let sql = "SELECT students.first_name, students.last_name, subjects.title FROM subjects INNER JOIN marks ON subjects.subject_id = marks.subject_id INNER JOIN students ON marks.student_id = students.student_id ";
        let [result] = await pool.query(sql);
        res.send(result);
    }catch(err){
        console.log(err);
    }
}

const getTeacher = async (req , res ) =>
{
    try{
        let sql, result;

        if (req.params.id == null){
            result = {headers: null, body:{"response":"la peticion no es correcta"}};
        }else{
            sql = "SELECT distinct teachers.first_name, teachers.last_name, subjects.title FROM subjects INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id INNER JOIN teachers ON subject_teacher.teacher_id = teachers.techer_id where teachers.techer_id =  " + req.params.id; 
        }
        [result] = await pool.query(sql);
        res.send(result);
    }catch(err){
        console.log(err);
    }
}

const getsubj = async (req , res) =>
{
    try{
        sql = "SELECT distinct teachers.first_name, teachers.last_name, subjects.title FROM subjects INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id INNER JOIN teachers ON subject_teacher.teacher_id = teachers.techer_id "; 
        console.log(sql);

        let [result] = await pool.query(sql)
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getmedia, getAsig, getAll, getTeacher, getsubj};
