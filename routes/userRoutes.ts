import  express  from "express";
import { createUser, getById, getUser , updateUser , deleteUser } from "../Controllers/userControllers";
import { Router } from 'express';
import  {createProfile, getProfile}  from "../Controllers/ProfileControllers"
import { createChild, getChild, getChildbyId } from "../Controllers/ChildController";
import { upload } from "../middleware/imageUpload";
import { uploadDocument } from "../middleware/fileUpload";
import { validate } from "../middleware/ValidateUser";
import { userSchema } from "../Validators/userValidator";
import { profileSchema } from "../Validators/childValidator";
// import {userSchema} from '../Validators/userValidator'


const router = Router();

router.get('/', getUser);
router.get('/getprofile',getProfile)
router.post('/new', validate(userSchema), createUser);
router.post('/profile' ,uploadDocument.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
  ])
  , createProfile)

router.post('/child',validate(profileSchema), createChild)
router.get('/getchild', getChild)
router.get('/idchild', getChildbyId)

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getById)

export default router;