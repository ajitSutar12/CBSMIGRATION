import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { System_master } from '../utility/user-defination/entity/system.entity';
import { USERDEFINATION } from '../utility/user-defination/entity/user-defination.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
    @InjectRepository(System_master) private systemMaster: Repository<System_master>,
    @InjectRepository(USERDEFINATION) private userdefination: Repository<USERDEFINATION>,
    private jwtService: JwtService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isMatch = await bcrypt.compare(pass, user.PASSWORD);
    // if(user.LOG_STATUS == '1'){
    //   throw new BadRequestException('User already logged in application',);
    // }
    if (user && isMatch && user.STATUS == 'active') {
      const { password, ...result } = user;
      this.userdefination.update(user.id,{LOG_STATUS:'1'});
      return result;
    }
    // throw new UnauthorizedException();
  }

  async login(user: any) {
    const system_master = await this.systemMaster.find();
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
      system_master: system_master
    };
  }
}
