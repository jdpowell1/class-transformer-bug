import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Owner } from '../owners/owner.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.findAll<Cat>({
      include: [
        {
          model: Owner,
          as: 'Owner',
        },
      ],
    });
  }
}
