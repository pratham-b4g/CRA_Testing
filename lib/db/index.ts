import { Sequelize } from 'sequelize';

declare global {
  // eslint-disable-next-line no-var
  var __sequelize: Sequelize | undefined;
}

function createSequelize(): Sequelize {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  return new Sequelize(databaseUrl, {
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

// Singleton pattern to prevent multiple connections during Next.js hot reload
const sequelize = global.__sequelize ?? createSequelize();

if (process.env.NODE_ENV !== 'production') {
  global.__sequelize = sequelize;
}

export { sequelize };

export async function connectDB(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}
