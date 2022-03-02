const Router = require("express");
const PersonController = require("../controllers/person.controller.js");
const router = new Router();

router.post("/person", PersonController.createPerson);
router.get("/person", PersonController.getPeople);
router.get("/person/:id", PersonController.getPerson);
router.put("/person", PersonController.updatePerson);
router.delete("/person/:id", PersonController.deletePerson);

module.exports = router;
