import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cat/cat.entity';
import { Owner } from './owner/owner.entity';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'root',
      password: 'password',
      database: 'nest',
      autoLoadModels: true,
      synchronize: true,
      logging: console.log,
      models: [Cat, Owner],
    }),
    CatModule,
    OwnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
