import express from 'express'
import router from './routes/userRoutes'

import {Profilemodel, sequelize} from './models'

const app = express()
app.use(express.json())

app.use('/route', router)


async function start(){
    try{
        await sequelize.authenticate()
        console.log("Database Connected")
        await sequelize.sync({alter: true});
      


//            Profilemodel.sync({ force: true })
//                  .then(() => {
//               console.log("✅ Profile table has been dropped and recreated.");
//              })
//            .catch((error) => {
//            console.error("❌ Error recreating Profile table:", error);
//   });


        app.listen(3000, ()=>{
            console.log("Server is Running On PORT 3000");
        })
    }catch(err){
        console.log(`Unable to Connect DB `, err)
    }
}

start()