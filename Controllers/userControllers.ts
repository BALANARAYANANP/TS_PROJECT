import { User } from '../Interfaces/User'
 import { Request, Response } from 'express'

import { Usermodel, sequelize } from '../models'


export const createUser = async (req: Request , res: Response) =>{
    const userData: User = req.body
    const t = await sequelize.transaction()

    try{
    const result = await Usermodel.create(userData,{transaction:t})
    await t.commit()
    res.status(200).send(result)
    }catch(err:any){
        res.status(400).json({message: "Unable to Create User " ,err: err.message})
        t.rollback()
    }
};

export const getUser = async (req:Request , res:Response) =>{
    try{
    const users = await Usermodel.findAll();
    res.status(200).json(users)
    }catch(err){
        res.status(400).json({Message: "Unable To Fetch Users"})
    }
}


export const getById = async (req:Request , res:Response) =>{
    const id = Number(req.params.id)
    try{
        const User = await Usermodel.findByPk(id)
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
        const user = await Usermodel.findByPk(id)
        if(user){
            const update =  await Usermodel.update(userData, { where: {id}})
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
        const user = await Usermodel.findByPk(id)
        if(user){
            const result = await Usermodel.destroy({where : {id}})
            res.status(200).json({message : "User Deleted Sucessfully"})

        }else{
            res.status(404).json({message: "User Not Found"})
        }
    }catch(err){
        res.status(400).send(err)
    }

};




