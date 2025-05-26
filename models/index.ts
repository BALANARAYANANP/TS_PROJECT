

import { Sequelize } from 'sequelize';
import { initUsermodel, Usermodel } from './Usermodel';
import { initProfilemodel, Profilemodel } from './Profilemodel';


const sequelize = new Sequelize('Novastrid', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});




initUsermodel(sequelize);
initProfilemodel(sequelize)

const models = {
  Usermodel,
  Profilemodel,
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});


export {
  sequelize,
  Usermodel,
  Profilemodel
};
