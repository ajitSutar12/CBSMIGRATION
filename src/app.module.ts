import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { UserDefinationModule } from './utility/user-defination/user-defination.module';
import { MigrateModule } from './migrate/migrate.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([]),
    UserDefinationModule,
    MigrateModule,
    AuthModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
