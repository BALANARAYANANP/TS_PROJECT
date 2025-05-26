import { Request, Response } from "express";
import { Child } from "../Interfaces/Child";
import { Childmodel , Usermodel} from "../models";



export const createChild = async(req:Request, res:Response) =>{
    const data : Child = req.body
    console.log(data)

    try{
        const result = await Childmodel.create(data);
        console.log(result);
        if(result)
            res.status(200).json({"User Created" : result})
        else{
            res.status(400).send("User Not Created")
        }
    }catch(err:any){
        res.status(200).json({"Error Occured :" : err.message})
    }
 }

 export const getChild = async (req: Request, res: Response) => {
    try {
        const result = await Childmodel.findAll({
            include: [{ model: Usermodel, as: "user" }],
          });
          
      if(result)
       res.status(200).send(result);
      else
        res.status(404).send("No Child Found")
    } catch (err: any) {
      res.status(400).json({ "Error message": err.message });
    }
  };

  export const getChildbyId = async (req: Request, res: Response) => {
    try {
        const result = await Childmodel.findAll()
        //     include: [{ model: Usermodel, as: "user" }],
        //   });
          
      if(result)
       res.status(200).send(result);
      else
        res.status(404).send("No Child Found")
    } catch (err: any) {
      res.status(400).json({ "Error message": err.message });
    }
  };
  