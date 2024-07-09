
const express= require('express')
const dotenv=require('dotenv').config();
const connectDB=require('./config/db.js')
const cors=require('cors')


const app=express();

const port=process.env.PORT || 5001
connectDB();
app.use(express.json())
app.use(cors())

app.use('/api/user/',require('./routes/userRoutes'))
app.use('/api/user/',require("./routes/ticketsRoutes"))

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})