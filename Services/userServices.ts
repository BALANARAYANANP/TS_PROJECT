import { User } from "../Interfaces/User";
import { Usermodel, Profilemodel, Childmodel } from "../models";

export class userService {
  async userCreation(data: User) {
    try {
      return await Usermodel.create(data);
    } catch (err: any) {
      throw new Error("UserService has thrown Error:" + err);
    }
  }

  async getAllUsers(page: number, limit: number) {
    const offset = (page - 1)* limit
    try {
      const {count, rows} =  await Usermodel.findAndCountAll({
        offset,
        limit,
        include: [
          { model: Profilemodel, as: "profile" },
          {
            model: Childmodel,
            as: "children",
          },
        ],
      });
      return{
        page,
        totalPages : Math.ceil(count / limit),
        totalUsres : count,
        users: rows
      }
    } catch (err) {
      throw new Error("getUser has  thrown an error" + err);
    }
  }

  async getOneUser(id: number) {
    try {
      return await Usermodel.findByPk(id);
    } catch (err) {
      throw new Error("getOneUser throw a error" + err);
    }
  }

  async updateUser(data: User, id: number) {
    try {
      return await Usermodel.update(data, { where: { id: id } });
    } catch (err) {
      throw new Error("Update User throw a Error");
    }
  }

  async deleteUser(id: number) {
    try {
      return await Usermodel.destroy({ where: { id: id } });
    } catch (err) {
      throw new Error("deleteUser throw  Error ");
    }
  }
}
