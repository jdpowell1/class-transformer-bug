import { Table, Column, Model, HasOne } from 'sequelize-typescript';
import { Owner } from '../owners/owner.entity';

@Table
export class Cat extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;

  @HasOne(() => Owner)
  Owner: Owner;
}
