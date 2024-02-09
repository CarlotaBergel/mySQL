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
        // let añadirColumna = "ALTER TABLE direccion ADD        ciudad VARCHAR(40)"; 
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

        // reto dia2

        // nota media alumnos asig 1
        // let notaMedia = "SELECT AVG (mark) FROM marks WHERE subjects_id=1"; 
        // let [result] = await connection.query(notaMedia);
        // console.log("Nota media");
        // console.log(result);
        
        // num total alumnos
        // let numAlumnos = "SELECT COUNT(*) FROM students"; 
        // let [result] = await connection.query(numAlumnos);
        // console.log("Numero de datos total alumnos");
        // console.log(result);

        //Todos los campos tabla grupos
        // let camposGrupos = "SELECT * FROM school.groups "; 
        // let [result] = await connection.query(camposGrupos);
        // console.log("Todos los campos de la tabla grupos");
        // console.log(result);
        
        // eliminar notas >5 y año pasado
        // let notasMas5 = "DELETE FROM marks WHERE mark > 5 AND (date > '2022-12-31' OR date <'2024-01-01')"; 
        // let [result] = await connection.query(notasMas5);
        // console.log("Eliminadas notas mayores a 5 y del año pasado");
        // console.log(result);

        // datos de los estudiantes de este año
        // let estEsteAño = " SELECT * FROM students WHERE into_date > '2023-12-31' "; 
        // let [result] = await connection.query(estEsteAño);
        // console.log("estudiantes este año");
        // console.log(result);

        // numero de profesores asignatura
        // let profAsig = " SELECT subject_id, COUNT(*) AS num_teachers FROM subject_teacher  GROUP BY subject_id"; 
        // let [result] = await connection.query(profAsig);
        // console.log("numero de profesores asignatura");
        // console.log(result);

        // id entre1-20 o nota >8
        // let condiciones = ["1", "20", "8", "'2022-12-31'", "'2024-01-01'"]
        // let resultCon = "SELECT student_id, mark FROM marks WHERE student_id BETWEEN ? AND ? OR (mark > ? AND date BETWEEN ? AND ?)"; 
        // let [result] = await connection.query(resultCon, condiciones);
        // console.log("resultados condidiones");
        // console.log(result);

        // Media notas ultimo año
        // let media = "SELECT subject_id, AVG (mark) AS media FROM marks WHERE date > '2023-01-31'GROUP BY subject_id "; 
        // let [result] = await connection.query(media);
        // console.log("notas medias ultimo año");
        // console.log(result);

        // Media aritmetica
        let mediaArimetica = "SELECT student_id, AVG (mark) AS media FROM marks WHERE date > '2023-01-31'GROUP BY student_id "; 
        let [result] = await connection.query(mediaArimetica);
        console.log("Media aritmetica");
        console.log(result);


    }
    catch(err){
        console.log(err);
        await connection.end();
    }
}

main();

