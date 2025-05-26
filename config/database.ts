
import {Sequelize }from "sequelize"
export const sequelize = new Sequelize ('Novastrid', 'root' , 'root' ,{

    host : 'localhost',
    dialect : 'mysql'


})

