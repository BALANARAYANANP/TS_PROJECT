import express from 'express'
import { Postemail, sendTestEmail } from '../Controllers/EmailControllers'

export const EmailRouter = express.Router()

EmailRouter.post('/email',Postemail)
EmailRouter.post('/emails',sendTestEmail)