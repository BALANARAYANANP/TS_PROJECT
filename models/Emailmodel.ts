import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from ".";
import { EmailType } from "../Enums/enumType.enum";
import { emailAttributes } from "../Interfaces/Email";


export class Emailmodel extends Model <emailAttributes>  implements emailAttributes {
   
        public id! : number;
        public type!: EmailType;
        public subject! : string;
        public content! : string
     
    }
   export function  initEmailmodel (sequelize:Sequelize):typeof Emailmodel{
    Emailmodel.init({
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type:{
            type : DataTypes.ENUM(...Object.values(EmailType)),
            allowNull: false,
            unique: true
        },
        subject:{
            type: DataTypes.STRING,
            allowNull: false
        },
        content :{
            type: DataTypes.STRING,
            allowNull: false
        },
        



    },{
        sequelize,
        tableName: 'emails'
    })
    return Emailmodel
}
