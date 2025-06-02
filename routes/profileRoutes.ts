import express from 'express'
import { createProfile, getProfile } from '../Controllers/ProfileControllers'
import { uploadDocument } from '../middleware/fileUpload'

export const ProfileRoute = express.Router()



ProfileRoute.post('/profile' ,uploadDocument.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
  ])
  , createProfile)


ProfileRoute.get('/getprofile',getProfile)