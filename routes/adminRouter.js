const express=require("express");
const authenticationUser = require("../config/validationToken");
const { checkRoles } = require("../middlewares/rolesMiddlewares");
const {getallUsers, updateUserstatus,agentUpdateUser}=require("../controllers/adminController")
const router = express.Router();

router.put("/admin/updatestatus/:id",authenticationUser,checkRoles(['admin']),updateUserstatus)
router.get('/admin/getallusers/',authenticationUser,checkRoles(['admin']),getallUsers)
router.put("/agent/updatestatus/:id", authenticationUser,checkRoles(['agent'],agentUpdateUser))

module.exports=router;