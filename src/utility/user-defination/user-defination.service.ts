import { BadRequestException, Injectable } from '@nestjs/common';
import { USERDEFINATION } from './entity/user-defination.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, UpdateResult } from 'typeorm';
import { Pagination } from './user-defination-pagination/pagination';
import { PaginationOptionsInterface } from '../../pagination/pagination.option.interface';
import { userdefinationDTO } from './dto/user-defination.dto';
import { ROLEDATAMASTER } from './entity/role-master.entity';
import { ROLEHASPERMISSION } from './entity/role-has-permission.entity';
import { EntityManager } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ROLE_DEFINE } from './entity/role-define.entity';
const mime = require('mime');
import * as fs from 'fs';
@Injectable()
export class UserDefinationService {
  constructor(
    private manager: EntityManager,
    @InjectRepository(USERDEFINATION) private readonly formPostRepository: Repository<USERDEFINATION>,
    @InjectRepository(ROLEDATAMASTER) private readonly RoleRepository: Repository<ROLEDATAMASTER>,
    @InjectRepository(ROLEHASPERMISSION) private readonly RoleHasRepository: Repository<ROLEHASPERMISSION>,
    @InjectRepository(ROLE_DEFINE) private readonly RoleDefineRepository: Repository<ROLE_DEFINE>
  ) { }


  //Method for load data from database
  async load(
    options: PaginationOptionsInterface,
  ): Promise<Pagination<USERDEFINATION[]>> {
    var object = {}
    for (var key in options.filterData) {
      object[key] = Like(`%${options.filterData[key]}%`)
    }

    const [data, recordsTotal] = await this.formPostRepository.findAndCount({
      relations: ['RoleDefine', 'RoleDefine.Role', 'branch', 'branch.syspara'],
      take: options.limit,
      skip: options.page,
      where: object
    });
    return new Pagination<USERDEFINATION[]>({
      data,
      recordsTotal,
    });
  }


  //insertion into database
  async insert(userdefination: userdefinationDTO) {
    const hash = await bcrypt.hash(userdefination.PASSWORD, 10);
    userdefination.PASSWORD = hash;
    const date = new Date();
    date.setDate(date.getDate() + 90);
    userdefination['EXP_DATE'] = date.toString();

    const result = await this.formPostRepository.save(userdefination);

    //insert role id 
    for (let i = 0; i < userdefination.roleId.length; i++) {
      const roleDefine = new ROLE_DEFINE();
      roleDefine['RoleId'] = userdefination.roleId[i];
      roleDefine['UserId'] = result.id;

      const roledata = await this.RoleDefineRepository.save(roleDefine)
    }

    return result;
  }
  //featch single row data from database
  async edit(id): Promise<USERDEFINATION> {
    return this.formPostRepository.findOne(id, { relations: ['RoleDefine', 'RoleDefine.Role', 'branch', 'branch.syspara'], });
  }
  //Updation into database
  async update(userdefination: userdefinationDTO) {
    const hash = await bcrypt.hash(userdefination.PASSWORD, 10);
    userdefination.PASSWORD = hash;
    return await this.formPostRepository.update(userdefination.id, userdefination);
  }
  //deletion into database
  delete(id) {
    this.formPostRepository.delete(id);
  }

  // dropdown
  async getuserdefinationList() {
    return await this.formPostRepository.createQueryBuilder("user")
      .innerJoinAndSelect("user.RoleDefine", "RoleDefine")
      .leftJoinAndSelect("RoleDefine.Role", "Role")
      .leftJoinAndSelect("Role.Rolehaspermission", "RolePermission")
      .innerJoinAndSelect("user.branch", "branch")
      .leftJoinAndSelect("branch.syspara", "bankDetails")
      .getMany()
  }

  //ROLE_MASTER
  getRolesList() {
    return this.RoleRepository.find();
  }

  async insertRoles(data) {
    console.log(data);
    let result = await this.RoleRepository.find({
      where: {
        NAME: data.NAME
      }
    });

    if (result.length != 0) {
      throw new BadRequestException('Role Already Exists');
    } else {
      return this.RoleRepository.save(data);
    }
  }

  async updateRoles(data) {
    let result = await this.RoleRepository.find({
      where: {
        NAME: data.NAME
      }
    });
    if (result.length != 0 && data.STATUS == result[0].STATUS) {
      throw new BadRequestException('Role Name Already Exists');
    } else {
      return this.RoleRepository.update(data.id, data);
    }
  }


  //insert role permissions
  insertRolehasPermission(data) {
    return this.RoleHasRepository.save(data);
  }

  getRoleMenuList() {
    return this.RoleHasRepository.find({ relations: ['Role'] })
  }

  //update Role and Branch Data
  async updateRoleBranch(data) {
    if (data.EDIT_ROLE.length == 0) {
      throw new BadRequestException('Please select aleast one role')
    }

    let deleteResult = await this.RoleDefineRepository.delete({ 'UserId': data.id });
    let updateResult = await this.formPostRepository.update(data.id, { 'branchId': data.Edit_branchId });

    for (let i = 0; i < data.EDIT_ROLE.length; i++) {
      const roleDefine = new ROLE_DEFINE();
      roleDefine['RoleId'] = data.EDIT_ROLE[i];
      roleDefine['UserId'] = data.id;

      const roledata = await this.RoleDefineRepository.save(roleDefine)
    }
  }

  async getUserDataTokenWise(id) {
    //check data
    return await this.formPostRepository.findOne(id);
  }

  //update user profile datails
  async update_user(data) {
    console.log(data);
    let imgProfilePath = '';
    // update user details
    let user = new USERDEFINATION();
    user['F_NAME'] = data.firstName;
    user['L_NAME'] = data.LastName;
    user['MOB_NO'] = data.phone;
    user['EMAIL'] = data.email;


    if (data.hasOwnProperty("imgbase64")) {
      let matches = data.imgbase64.match(/^data:(.+);base64,(.+)$/);
      let response: any = {};
      if (!matches || matches.length !== 3) {
        return null;
      }

      if (!fs.existsSync('upload/profile')) {
        fs.mkdirSync('upload/profile', { recursive: true });
      }

      response.type = matches[1];

      response.data = Buffer.from(matches[2], 'base64');
      const ext = mime.extension(response.type);

      // base64 encoded data doesn't contain commas
      let mimeType = data.imgbase64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0].split("/");

      const buffer = Buffer.from(matches[2]);
      const file_size = (buffer.length / 1e+6).toString();
      const file_name = (new Date()).getTime();
      const file_path: string = `upload/profile/${file_name}.${mimeType[1]}`;
      imgProfilePath = file_path;
      fs.writeFile(file_path, response.data, 'base64', function (err) {
        if (err) throw err
      })
      user['PROFILE_PATH'] = imgProfilePath;
    }
    //check current password is correct or not
    if (data.currentPassword != '' && data.newPassword != '' && data.confirmPassword != '') {
      let details = await this.formPostRepository.findOne(data.id);
      console.log(data.currentPassword);
      let curr_pass = await bcrypt.hash(data.currentPassword, 10);
      if (curr_pass != details.PASSWORD) {
        console.log(data.newPassword);
        let newPassword = await bcrypt.hash(data.newPassword, 10);
        console.log(newPassword);
        user['PASSWORD'] = newPassword;

      } else {
        throw new BadRequestException('Current password not matched')
        // const date = new Date();
        // date.setDate(date.getDate() + 90);
        // user['EXP_DATE'] = date.toString();
      }
    }

    let result = await this.formPostRepository.update(data.id, user);
    result['PROFILE_PATH'] = user['PROFILE_PATH']
    result['id'] = data['id']
    console.log(result)
    return result;
  }

  // async getNarrationCount() {
  //   // let data = await this.manager.query(`SELECT public.totalnarrations()`);
  //   // let data = await this.manager.query(`SELECT public.getacname[Vscheme]`);
  //   let data = await this.manager.query(`SELECT public.demo(p_num, p_msg)`);
  //   console.log(data);
  // }
  async getNarrationCount() {
    // console.log(array)
    // let arr = array.toString().split(",");
    // console.log(arr[0])
    // var p_num = arr[0]
    // var p_msg =arr[1]
    // console.log(p_num,p_msg)
    // let data = await this.manager.query(`SELECT public.totalnarrations()`);
    // let data = await this.manager.query(`SELECT public.getacname[Vscheme]`);
    // let data = await this.manager.query(`SELECT public.testing_function(${p_num}, '${p_msg}')`);
    let data = await this.manager.query(`SELECT public.getacname('SB', 100001)`);
  }
  // async getNarrationCount(array) {
  //   console.log(array)
  //   let arr = array.toString().split(",");
  //   console.log(arr[0])
  //   var p_num = arr[0]
  //   var p_msg =arr[1]
  //   console.log(p_num,p_msg)
  //   // let data = await this.manager.query(`SELECT public.totalnarrations()`);
  //   // let data = await this.manager.query(`SELECT public.getacname[Vscheme]`);
  //   // let data = await this.manager.query(`SELECT public.testing_function(${p_num}, '${p_msg}')`);
  //   let data = await this.manager.query(`SELECT public.public.getacname('SB', 100001)`);
  //   console.log(data);
  // }

  async resetPassword(data) {
    let status = '';
    let id: any;
    let curr_pass = await bcrypt.hash(data.currentPassword, 10);
    let details = await this.formPostRepository.find({
      where: {
        EMAIL: data.email
      }
    });
    if (details.length != 0) {
      if (await bcrypt.compare(data.currentPassword, details[0].PASSWORD)) {
        id = details[0].id;
        let newPassword = await bcrypt.hash(data.newPassword, 10);
        let user = new USERDEFINATION();
        user['PASSWORD'] = newPassword;
        return await this.formPostRepository.update(id, user);
      } else {
        throw new BadRequestException('Current Password not matched')
      }
    } else {
      throw new BadRequestException('User Details not Found Please try again')
    }
  }

  //logout user
  async logout(data) {
    return this.formPostRepository.update(data.id, { LOG_STATUS: '0' });
  }

  editlocal(id): Promise<USERDEFINATION> {

    return this.formPostRepository.findOne(id);

  }
}
