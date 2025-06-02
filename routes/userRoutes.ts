import  express  from "express";
import { createUser, getById, getUser , updateUser , deleteUser } from "../Controllers/userControllers";
import { Router } from 'express';
import  {createProfile, getProfile}  from "../Controllers/ProfileControllers"
import { createChild, getChild, getChildbyId } from "../Controllers/ChildController";
import { upload } from "../middleware/imageUpload";
import { uploadDocument } from "../middleware/fileUpload";
import { validate } from "../middleware/ValidateUser";
import { userSchema } from "../Validators/userValidator";

import { sendTestEmail } from "../Controllers/EmailControllers";
import { Postemail } from "../Controllers/EmailControllers";
import { childSchema } from "../Validators/childValidator";
// import {userSchema} from '../Validators/userValidator'


const router = Router();



router.post('/new', validate(userSchema), createUser);
router.get('/', getUser);
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getById)

export default router;