import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Owner } from '../owner/owner.entity';

@Table
export class Cat extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;

  @BelongsTo(() => Owner)
  Owner: Owner;

  @ForeignKey(() => Owner)
  OwnerId: number;
}
