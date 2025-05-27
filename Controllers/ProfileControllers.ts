import { Request, Response } from "express";
import { Profile } from "../Interfaces/Profile";
import { Profilemodel , Usermodel} from "../models";



export const createProfile = async(req:Request, res:Response) =>{

    const files = req.files as {
        [fieldname: string]: Express.Multer.File[];
      };
    
    const {bio, age, userId} = req.body;
    const profilePic = files['profilePic']?.[0].filename;
    const resume = files['resume']?.[0].filename;
    const data : Profile = {
        bio,
        age,
        userId : parseInt(userId),
        profilePic,
        resume
        
    }
    console.log(data)

    try{
        
        const result = await Profilemodel.create(data);
        console.log(result);
        if(result)
            res.status(200).json({"User Created" : result})
        else{
            res.status(400).send("User Not Created")
        }   
    }catch(err:any){
        res.status(401).json({"Error Occured :" : err.message})
    }
 }

 export const getProfile = async (req: Request, res: Response) => {
    try {
        const result = await Profilemodel.findAll({
            include: [{ model: Usermodel, as: "user" }],
          });
          
      if(result)
       res.status(200).send(result);
      else
        res.status(404).send("No Profile Found")
    } catch (err: any) {
      res.status(400).json({ "Error message": err.message });
    }
  };
  