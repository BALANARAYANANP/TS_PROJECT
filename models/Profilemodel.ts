import { DataTypes, Model, Sequelize } from "sequelize";
import { Profile } from "../Interfaces/Profile";
import { Usermodel } from "./Usermodel";
// import { DB } from "./index";
const sequelize = require('../models')


export class Profilemodel extends Model <Profile> implements  Profile {

    public bio! : string;
    public age! : number;
    public userId!: number;
    static associate(models: any) {
        Profilemodel.belongsTo(models.Usermodel, {
          foreignKey: "userId",
          as: "user",
        });
      }
    }



export function initProfilemodel(sequelize:Sequelize):typeof Profilemodel {
Profilemodel.init(
    {
        bio:{
            type : DataTypes.STRING,
            allowNull : false
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId :{
            type: DataTypes.INTEGER,
            allowNull: false

        }
    },{
        tableName: 'Profiles',
         sequelize,
    }
    
)
return Profilemodel

}
