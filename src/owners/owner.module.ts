import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './owner.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
