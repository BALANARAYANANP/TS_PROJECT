import { User } from '../Interfaces/User'
 import { Request, Response } from 'express'

import { Usermodel, sequelize ,Profilemodel, Childmodel } from '../models'
import { userService } from '../Services/userServices';

const UserServices = new userService()


export const createUser = async (req: Request , res: Response): Promise<void> =>{
    const userData: User = req.body
    const id = Number(req.params.id)
    const t = await sequelize.transaction()

    try{
    //    const existingUser = await UserServices.getOneUser(id)
    //    if(existingUser) 
    //     res.status(401).json({Error : "User Already Exists"}) 
    // else{

    const result = await UserServices.userCreation(userData)
    res.status(200).send(result)
    // }
}catch(err:any){
        res.status(400).json({message: "Unable to Create User " ,err: err.message})
        
    }
};

export const getUser = async (req:Request , res:Response) =>{
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 4
   
    try{
        
        const users = await UserServices.getAllUsers(page, limit)
          
    res.status(200).json(users)
    }catch(err){
        res.status(400).json({Message: "Unable To Fetch Users"})
    }
}


export const getById = async (req:Request , res:Response) =>{
    const id = Number(req.params.id)
    try{
        const User = await UserServices.getOneUser(id)
        
        if(User){
            res.status(200).send(User)
        }else{
            res.status(404).json({message: "User not Found"})
        }

    }catch(err){
        res.status(400).json({message: "Invalid Credentials"})
    }
   
}


export const updateUser = async(req:Request, res:Response) => {
    const userData: User = req.body
    const id= Number(req.params.id)

    try{
        const user = await UserServices.getOneUser(id)
        if(user){
            const update =  await UserServices.updateUser(userData, id)
            res.status(200).json({message: "User Updated Sucessffully"})

        }
        else{
            res.status(404).json({message: "User Not Found"})
        }
    }catch(err){
        res.status(400).send(err)
    }
}


export const deleteUser = async (req:Request, res:Response) =>{
    const id = Number(req.params.id)

    try{
        const user = await UserServices.getOneUser(id)
        if(user){
            const result = await UserServices.deleteUser(id)
            res.status(200).json({message : "User Deleted Sucessfully"})

        }else{
            res.status(404).json({message: "User Not Found"})
        }
    }catch(err){
        res.status(400).send(err)
    }

};




