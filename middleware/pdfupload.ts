
import { Request } from "express";
import multer, { FileFilterCallback, Multer }  from "multer";
import path from "path"


const storage = multer.diskStorage({

    destination : (req, file, cb ) =>{
        cb(null, '')
    },

    filename :(req, file, cb) =>{

        const new_name = Date.now() 
        cb(null , `${new_name}${path.extname(file.originalname)}`)

    }
})

const fileFilter = (req:Request, file: Express.Multer.File, cb:FileFilterCallback) =>{
    const extname = path.extname(file.originalname).toLocaleLowerCase()
    if(extname === '.html'){
        cb(null, true)
    }else{
        cb(new Error ("Only Html Files Are Allowed"))
    }
}

export const   pdfupload = multer({ storage , fileFilter })

