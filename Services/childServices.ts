
import { Child } from "../Interfaces/Child";
import { Usermodel,  Childmodel } from "../models";

export class childService {


   async childCreation (data: Child) {

        return await Childmodel.create(data)
    }

    async getAllChilds (){
        return await Childmodel.findAll({
            include: [{ model: Usermodel, as: "user" }],
          });

    }

    async getOneChild (id: number){
        return await Childmodel.findByPk(id)
    }

    
}