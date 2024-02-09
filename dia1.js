const mysql = require("mysql2/promise");

async function main(){
    let connection;
    try{
        connection = await mysql.createConnection({
            host        :"localhost",
            user        : "root",
            password    : "admin",
            database    : "school"
        });
        console.log("Conexión correcta");

        // añadimos una columna
        // let añadirColumna = "ALTER TABLE direccion ADD ciudad VARCHAR(40)"; 
        // let [result] = await connection.query(añadirColumna);
        // console.log("Columna añadida");
        // console.log(result);

        // eliminamos una columna
        // let eliminarColumna = "ALTER TABLE direccion DROP ciudad"; 
        // let [result] = await connection.query(eliminarColumna);
        // console.log("Columna eliminada");
        // console.log(result);

        //eliminar tabla
        // let eliminarTabla = "DROP TABLE direccion"; 
        // let [result] = await connection.query(eliminarTabla);
        // console.log("tabla borrada");
        // console.log(result);

        //setear notas  
        // let setearNotas = "UPDATE marks SET mark = 0"; 
        // let [result] = await connection.query(setearNotas);
        // console.log("Notas seteadas");
        // console.log(result);

        //obtener dos columnas
        // let obtenerDatos = "SELECT first_name, last_name FROM students"; 
        // let [result] = await connection.query(obtenerDatos);
        // console.log("Datos obtenidos");
        // console.log(result);

        //obtenere datos
        // let obtenerDatos= "SELECT * FROM teachers"; 
        // let [result] = await connection.queryobtenerDatos= 
        // console.log("Datos obtenidos de los profesores");
        // console.log(result);

        //eliminar notas +10
        // let eliminarNotas= "DELETE FROM marks WHERE date<'2013-01-30'"; 
        // let [result] = await connection.query(eliminarNotas);
        // console.log("notas borradas");
        // console.log(result);

        //subir nota <5 a 5
        // let subirNota= "UPDATE marks SET mark=5 WHERE mark<5"; 
        // let [result] = await connection.query(subirNota);
        // console.log("Notas subidas");
        // console.log(result);


    }
    catch(err){
        console.log(err);
        await connection.end();
    }
}

main();

