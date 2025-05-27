import multer , {FileFilterCallback} from 'multer'

import path from 'path'
import { Request } from 'express'



const storage = multer.diskStorage({

    destination : (req,file, cb) =>{
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const Suffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${Suffix}${path.extname(file.originalname)}`);
      }

},    )

const fileFilter = (req:Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
     if (allowedTypes.includes(file.mimetype)){
      cb(null, true);
    } else {
      cb(new Error('Only JPG, JPEG, or PNG files are allowed'));
    }
  };
  export const upload = multer({ storage, fileFilter });