import { DataTypes, Model, Sequelize } from "sequelize";
import { Profile } from "../Interfaces/Profile";
import { Usermodel } from "./Usermodel";
import { Child } from "../Interfaces/Child";
// import { DB } from "./index";
const sequelize = require('../models')


export class Childmodel extends Model <Child> implements  Child {

    public name! : string;
    public age! : number;
    public userId!: number;

    static associate(models: any) {
        Childmodel.belongsTo(models.Usermodel, {
          foreignKey: 'userId',
          as: 'user',
        });

       
      }
    }
    


export function initChildmodel(sequelize:Sequelize):typeof Childmodel {
Childmodel.init(
    {
        name:{
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
        tableName: 'children',
         sequelize,
    }
    
)
return Childmodel

}
