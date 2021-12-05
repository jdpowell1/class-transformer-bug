import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Controller('/cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getCats(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
