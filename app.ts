import express, { NextFunction, Request, Response } from "express";
import router from "./routes/userRoutes";
import path from "path";

import { Profilemodel, sequelize } from "./models";
import { childRouter } from "./routes/childRoute";
import { ProfileRoute } from "./routes/profileRoutes";
import { EmailRouter } from "./routes/EmailRoutes";
import multer from "multer";
import pdfrouter from "./routes/pdfRoute";
import { csvrouters } from "./routes/csvRoutes";

const app = express();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/route", router);
app.use('/child', childRouter)
app.use('/profile', ProfileRoute)
app.use('/email', EmailRouter)

app.use('/', pdfrouter);
app.use('/' ,  csvrouters)




async function start() {
  try {
    await sequelize.authenticate();
    console.log("Database Connected");
    await sequelize.sync({ force: false });

    app.listen(3000, () => {
      console.log("Server is Running On PORT 3000");
    });
  } catch (err) {
    console.log(`Unable to Connect DB `, err);
  }
}

start();
