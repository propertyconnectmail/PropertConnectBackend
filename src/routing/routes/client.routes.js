const router = require("express").Router();
let client = require("../../controllers/client.controller")

//Routes related to user actions of types temp-admin, staff, lecturer and student
router.post("/register", client.clientRegister);
router.post("/get", client.findClient);
router.get("/get/all", client.findAllClients);
router.post("/update", client.updateClient);
// // router.post("/update/pass", employee.updateEmployeePassword);
// // router.post("/update/picture", employee.updatePicture);
router.post("/delete", client.deleteClient);

module.exports = router;