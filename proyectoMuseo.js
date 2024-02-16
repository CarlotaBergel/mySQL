const mysql = require("mysql2/promise");


async function main(){
    let connection;
    try{
        connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "admin",
            database: "museum"
        });
        console.log("Conexión correcta")

        // listado de todos los objetos prestamo, localización dentro de la exposicion, fecha de expiracion e info basica de la persona
        
        // let data = "SELECT piece.name, piece.location, state.borrow_date, owner.name, owner.last_name, owner.email" + " FROM piece" + 
        // "INNER JOIN state ON piece.state_id = state.state_id" + "INNER JOIN owner ON piece.owner_id = owner.owner_id" + "WHERE state.state_id = 2"
        // let [result] = await connection.query(data);
        // console.log("mostrar data");
        // console.log(result);


        let sql = " SELECT collection.type, COUNT(*) AS piece_id FROM piece " + "INNER JOIN collection ON piece.collection_id = collection.collection_id " + "GROUP BY collection.type ";
        let [result] = await connection.query(sql);
        console.log("datos recogidos");
        console.log(result);
    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}
main();