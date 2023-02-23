import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDefinationController } from './user-defination.controller';
import { UserDefinationService } from './user-defination.service';
import {USERDEFINATION} from './entity/user-defination.entity';
import { ROLEDATAMASTER } from './entity/role-master.entity';
import { ROLEHASPERMISSION } from './entity/role-has-permission.entity';
import { ROLE_DEFINE } from './entity/role-define.entity';
import { MENULIST } from './entity/menulist.entity';
import { System_master } from './entity/system.entity';
// import {AuthModule} from '../../auth/auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([USERDEFINATION,ROLEDATAMASTER,ROLEHASPERMISSION,ROLE_DEFINE,MENULIST,System_master]),
  // AuthModule
  ],
  controllers: [UserDefinationController],
  providers: [UserDefinationService
  ],
  exports:[UserDefinationService]
})
export class UserDefinationModule {}
