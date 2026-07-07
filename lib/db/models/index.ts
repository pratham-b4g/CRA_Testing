import { sequelize } from '../index';
import { User } from './User';
import { Estimation } from './Estimation';

// Define associations
User.hasMany(Estimation, { foreignKey: 'userId', as: 'estimations', onDelete: 'CASCADE' });
Estimation.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export async function syncModels(force = false): Promise<void> {
  await sequelize.sync({ force, alter: !force });
  console.log('Database models synchronized.');
}

export { User, Estimation };
