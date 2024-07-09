const express =require('express');
const authenticationUser = require('../config/validationToken');
const { createTicket, viewAllTickets,deleteUserTicket } = require('../controllers/ticketControllers');
const router=express.Router();


router.post("/createticket",authenticationUser,createTicket)
router.get("/viewalltickets",authenticationUser,viewAllTickets)
router.delete("/deleteticket/:id",authenticationUser,deleteUserTicket)

module.exports=router