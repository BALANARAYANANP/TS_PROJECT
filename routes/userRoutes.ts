import  express  from "express";
import { createUser, getById, getUser , updateUser , deleteUser } from "../Controllers/userControllers";
import { Router } from 'express';
// import { createProfile } from "../Controllers/profileControllers";
const router = Router();

router.get('/', getUser);
router.post('/new', createUser)
// router.post('/profile', createProfile)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getById)

export default router;