import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Populate the database with a cat and an owner then navigate to /cats to replicate the bug.';
  }
}
