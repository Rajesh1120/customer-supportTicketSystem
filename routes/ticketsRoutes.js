const express =require('express');
const authenticationUser = require('../config/validationToken');
const { checkRoles } = require("../middlewares/rolesMiddlewares");
const { createTicket, viewAllTickets,deleteUserTicket } = require('../controllers/ticketControllers');
const router=express.Router();


router.post("/createticket",authenticationUser,checkRoles['user'],createTicket)
router.get("/viewalltickets",authenticationUser,checkRoles['user'],viewAllTickets)
router.delete("/deleteticket/:id",authenticationUser,checkRoles['user'],deleteUserTicket)

module.exports=router