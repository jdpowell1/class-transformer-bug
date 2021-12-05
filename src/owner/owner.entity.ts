import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Cat } from '../cat/cat.entity';

@Table
export class Owner extends Model {
  @Column
  name: string;

  @HasMany(() => Cat)
  Cats: Cat[];
}
