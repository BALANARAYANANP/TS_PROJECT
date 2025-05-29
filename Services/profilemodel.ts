

import { Profile } from "../Interfaces/Profile";
import { Profilemodel, Usermodel} from "../models";

export class profileService {


   async profileCreation (data: Profile) {

        return await Profilemodel.create(data)
    }

    async getAllProfiles (){
        return await Profilemodel.findAll({
            include: [{ model: Usermodel, as: "user" }],
          });

    }

    

    
}