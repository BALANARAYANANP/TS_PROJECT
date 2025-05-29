import { DataTypes, Model, Sequelize } from "sequelize"
import { User } from "../Interfaces/User";




export class Usermodel extends Model <User> implements User {
    public id!: number;
    public name! : string;
    public email! : string;
    public age?: number;
    public readonly createdAt! : Date;
    public readonly UpdatedAt! : Date;

    static associate(models: any) {
        Usermodel.hasOne(models.Profilemodel, {
          foreignKey: "userId",
          as: "profile",
        });
        Usermodel.hasMany(models.Childmodel, {
            foreignKey: 'userId',
            as: 'children',
          });
      }
 
}

export function initUsermodel(sequelize:Sequelize):typeof Usermodel {
Usermodel.init(
    {
        id:{

            type : DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        name:{
            type : DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
          
        },
        age:{
            type : DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: 'Users',
        sequelize,
    }
)
return Usermodel 

}
