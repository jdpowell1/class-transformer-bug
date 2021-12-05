import { Controller, Get } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner } from './owner.entity';

@Controller('/owner')
export class OwnerController {
  constructor(private readonly ownersService: OwnerService) {}

  @Get()
  getOwners(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }
}
