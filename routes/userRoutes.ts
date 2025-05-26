import  express  from "express";
import { createUser, getById, getUser , updateUser , deleteUser } from "../Controllers/userControllers";
import { Router } from 'express';
import  {createProfile, getProfile}  from "../Controllers/ProfileControllers"
import { createChild, getChild, getChildbyId } from "../Controllers/ChildController";
const router = Router();

router.get('/', getUser);
router.get('/getprofile',getProfile)
router.post('/new', createUser)
router.post('/profile', createProfile)

router.post('/child', createChild)
router.get('/getchild', getChild)
router.get('/idchild', getChildbyId)

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getById)

export default router;