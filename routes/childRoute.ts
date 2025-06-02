import  express  from "express"
import { createChild, getChild, getChildbyId } from "../Controllers/ChildController"
import { validate } from "../middleware/validateChild"
import { childSchema } from "../Validators/childValidator"



export const childRouter = express.Router()

childRouter.post('/child',validate(childSchema), createChild)
childRouter.get('/getchild',getChild )
childRouter.get('/idchild/:id', getChildbyId)