const {Router} = require ("express")
const routers = Router();
const userCtrl = require("../controller/asig_notas.controller");

routers.get("/media", userCtrl.getmedia);
routers.get("/asiguser", userCtrl.getAsig);
routers.get("/all", userCtrl.getAll);
routers.get("/profesores/:id", userCtrl.getTeacher);
routers.get("/asigprof", userCtrl.getsubj);


module.exports = routers;