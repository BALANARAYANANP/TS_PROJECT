

import { Sequelize } from 'sequelize';
import { initUsermodel, Usermodel } from './Usermodel';
import { initProfilemodel, Profilemodel } from './Profilemodel';
import { initChildmodel, Childmodel } from './Childmodel';
 import { initEmailmodel, Emailmodel } from './Emailmodel';

const sequelize = new Sequelize('Novastrid', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});
initUsermodel(sequelize);
initProfilemodel(sequelize)
initChildmodel(sequelize)
initEmailmodel(sequelize)

const models = {
  Usermodel,
  Profilemodel,
  Childmodel,
  Emailmodel
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});


export {
  sequelize,
  Usermodel,
  Profilemodel,
  Childmodel,
  Emailmodel
};
