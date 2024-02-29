const {Router} = require("express");
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller");

router.get("/students", alumnosCtrl.getAlum);
router.get("/students/:id", alumnosCtrl.getAlum);
router.post("/students", alumnosCtrl.postAlum);
router.put("/students", alumnosCtrl.putAlum);
router.delete("/students", alumnosCtrl.deleteAlum);


module.exports = router;
