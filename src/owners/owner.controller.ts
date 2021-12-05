import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './owner.entity';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
