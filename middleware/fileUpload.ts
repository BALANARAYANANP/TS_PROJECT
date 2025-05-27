import multer , {FileFilterCallback} from 'multer'

import path from 'path'
import { Request } from 'express'
const file_size = 1 * 1024 * 2024


const storage = multer.diskStorage({

    destination : (req,file, cb) =>{
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const Suffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${Suffix}${path.extname(file.originalname)}`);
      }

},    )
// Custom file filter
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const ext = path.extname(file.originalname).toLowerCase();
  
    if (file.fieldname === 'profilePic') {
      // Allow only image files for profilePic
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed for profilePic'));
      }
    } else if (file.fieldname === 'resume') {
      // Allow only PDF for resume
      if (ext === '.pdf') {
        cb(null, true);
      } else {
        cb(new Error('Only PDF files are allowed for resume'));
      }
    } else {
      cb(new Error('Unexpected field'));
    }
  };
  export const uploadDocument = multer({ storage, fileFilter, limits :{
    fileSize : file_size
  } });