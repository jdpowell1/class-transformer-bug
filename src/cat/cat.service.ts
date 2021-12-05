import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.findAll<Cat>();
  }
}
