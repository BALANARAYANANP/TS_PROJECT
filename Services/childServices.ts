
import { Child } from "../Interfaces/Child";
import { Usermodel,  Childmodel } from "../models";

export class childService {


   async childCreation (data: Child) {
        try{

        return await Childmodel.create(data)
        }catch(err:any){
            throw new Error ('Child Services Throw an Error' + err)
        }
    }

    async getAllChilds (){
        try
        {
        return await Childmodel.findAll({
            include: [{ model: Usermodel, as: "user" }],
          });
        }catch(err){
        throw new Error ("GetChild Service Throw a Error")
        }
    }

    async getOneChild (id: number){
        return await Childmodel.findByPk(id)
    }

    
}