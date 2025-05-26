

import { Sequelize } from 'sequelize';
import { initUsermodel, Usermodel } from './Usermodel';


const sequelize = new Sequelize('Novastrid', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});


initUsermodel(sequelize);


export {
  sequelize,
  Usermodel,
};
