import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { USERDEFINATION } from 'src/utility/user-defination/entity/user-defination.entity';
import { Repository } from 'typeorm';
import { UrlWithStringQuery } from 'url';
import { UserDefinationService } from '../utility/user-defination/user-defination.service';
export type User = any;
@Injectable()
export class UsersService {
  userData: any;

  constructor(
    private userService: UserDefinationService
  ) { }
  // private readonly users = [
  //     {
  //       userId: 1,
  //       username: '9090909090',
  //       password: 'Admin@21',
  //     },
  //     {
  //       userId: 2,
  //       username: 'maria',
  //       password: 'guess',
  //     },
  //   ];



  async findOne(username: string): Promise<User | undefined> {
    this.userData = await this.userService.getuserdefinationList();
    return this.userData.find(user => user.USER_NAME === username);
    // return Object.keys(this.userData).find(key=> this.userData['USER_NAME'] === username)
  }
}
