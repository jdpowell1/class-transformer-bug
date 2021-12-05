import { Injectable } from '@nestjs/common';
import { Owner } from './owner.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner)
    private ownerModel: typeof Owner,
  ) {}

  async findAll(): Promise<Owner[]> {
    return this.ownerModel.findAll<Owner>();
  }
}
