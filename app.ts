import express from 'express'
import router from './routes/userRoutes'
// const sequelize  = require('./config/db')
import {sequelize} from './config/database'

const app = express()
app.use(express.json())

app.use('/route', router)


async function start(){
    try{
        await sequelize.authenticate()
        console.log("Database Connected")
        await sequelize.sync();

        app.listen(3000, ()=>{
            console.log("Server is Running On PORT 3000");
        })
    }catch(err){
        console.log(`Unable to Connect DB `, err)
    }
}

start()