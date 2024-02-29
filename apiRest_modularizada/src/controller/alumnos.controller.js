const {pool} = require("../../database");

const getAlum = async (request, response) =>{
    try{
        let sql;
        if (request.query.id == null){
            sql = "SELECT * FROM students";
        }else{
            sql = "SELECT * FROM students WHERE student_id"
        }
        let [result] =await pool.query(sql);
        console.log(result);
        response.send(result);
    }
    catch(err){
        console.log(err);
    }
}

const postAlum = async (request, response) =>{
    try{
        console.log(request.body);
        let sql= "INSERT INTO students (first_name, last_name) " + " VALUES ('" + request.body.first_name +"', '" + request.body.last_name +"')" ;
        console.log(sql);
        
        let [result] = await pool.query(sql);
        console.log(result);

        if(result.insertId){
            response.send(String(result.insertId));
        }else{
            response.send("-1");
        }
    }
    catch(err){
        console.log(err);
    }
}

const putAlum =async (request, response) =>{
    try{
        console.log(request.body);
        let params = [request.body.first_name, request.body.last_name, request.body.group_id, request.body.student_id];
        
        let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " + "last_name = COALESCE(?, last_name) , " + "group_id = COALESCE(?, group_id) WHERE student_id =?";
        console.log(sql);
        let [result] = await pool.query(sql, params);
        response.send(result);
    }
    catch(err){
        console.log(err);
    }
}

const deleteAlum = async (req, res) =>
{
    try{
        console.log(req.body);
        let sql = "DELETE FROM students WHERE student_id = ?";
        console.log(sql);
        let [result] = await pool.query(sql,[req.body.idalumno]);
        res.send(result)
    }
    catch(err){
        console.log(err);
    }
}

module.exports={getAlum, postAlum, putAlum, deleteAlum};