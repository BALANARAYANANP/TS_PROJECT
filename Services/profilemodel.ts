import { Profile } from "../Interfaces/Profile";
import { Profilemodel, Usermodel} from "../models";

export class profileService {


   async profileCreation (data: Profile) {
    
    try{
        return await Profilemodel.create(data)
    }catch(err){
        throw new Error ("While Profile Creation Error Was Occured")
    }
    }

    async getAllProfiles (){
        try{
        return await Profilemodel.findAll({
            include: [{ model: Usermodel, as: "user" }],
          });
        }catch(err){
            throw new Error ("GetAll Profiles Throw An error")
        }
    }

    

    
}