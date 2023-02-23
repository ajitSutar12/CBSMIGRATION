import { Module } from '@nestjs/common';
import { UserDefinationModule } from '../utility/user-defination/user-defination.module';
import { UsersService } from './users.service';

@Module({
  imports:[UserDefinationModule],
  providers: [UsersService],
  exports: [UsersService],

})
export class UsersModule {}
