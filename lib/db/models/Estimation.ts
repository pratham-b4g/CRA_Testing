import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../index';

interface EstimationAttributes {
  id: string;
  userId: string;
  imageName: string;
  collectibleType: string;
  condition: string;
  estimatedPriceMin: number;
  estimatedPriceMax: number;
  currency: string;
  confidence: number;
  reasoning: string;
  createdAt?: Date;
  updatedAt?: Date;
}

type EstimationCreationAttributes = Optional<EstimationAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export class Estimation
  extends Model<EstimationAttributes, EstimationCreationAttributes>
  implements EstimationAttributes
{
  declare id: string;
  declare userId: string;
  declare imageName: string;
  declare collectibleType: string;
  declare condition: string;
  declare estimatedPriceMin: number;
  declare estimatedPriceMax: number;
  declare currency: string;
  declare confidence: number;
  declare reasoning: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Estimation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    imageName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    collectibleType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    estimatedPriceMin: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    estimatedPriceMax: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'USD',
    },
    confidence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
    reasoning: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'estimations',
  }
);

export default Estimation;
