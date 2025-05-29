import { User} from "../Interfaces/User";
import { Usermodel, Profilemodel, Childmodel } from "../models";

export class userService {


   async userCreation (data: User) {

        return await Usermodel.create(data)
    }

    async getAllUsers (){
        return await Usermodel.findAll({   
             include: [{ model: Profilemodel, as: "profile" },  {
            model: Childmodel,
            as: "children",
          },],
      });

    }

    async getOneUser (id: number){
        return await Usermodel.findByPk(id)
    }

    async updateUser (data:User, id:number) {
        return await Usermodel.update(data, {where:{id: id}})
    }

    async deleteUser (id:number){
        return await Usermodel.destroy({where: {id: id}})
    }
}