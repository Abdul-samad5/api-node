const router = require("express").Router()
const controller = require("../controller/userController")


router.get("/", controller.getAllUsers)
router.get("/:id", controller.getUser)
router.post("/", controller.createUser)
router.delete("/:id", controller.deleteUser)

module.exports = router