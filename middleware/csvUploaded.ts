import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import path from 'path'

const storage = multer.diskStorage({

    destination : (req, file, cb) =>{
        cb(null, './uploads')
    },

    filename: (req, file, cb) =>{
        const name = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, `${name}${path.extname(file.originalname)}`)
    }
})

const fileFilter  = (req:Request,file:Express.Multer.File,cb: FileFilterCallback)=>{
    const extname = path.extname(file.originalname).toLocaleLowerCase()

    if(extname === '.csv'){
        cb(null, true)
    }else{
        cb( new Error ("Only csv Files Are Allowed"))
    }
}

export const csvUploads = multer({
    storage,
    fileFilter
})

