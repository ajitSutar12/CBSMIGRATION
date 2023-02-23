import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, Param, Post, Put, Request, UseInterceptors } from '@nestjs/common';
import { UserDefinationService } from './user-defination.service';
import { USERDEFINATION } from './entity/user-defination.entity';
import { Pagination } from './user-defination-pagination/pagination';
import { PaginationDto } from '../../pagination/pagination.dto';
import { userdefinationDTO } from './dto/user-defination.dto';
import { request } from 'http';
import { User } from 'src/auth/user.decorator';

@Controller('user-defination')
export class UserDefinationController {
    constructor(private formService: UserDefinationService) { }
    //load data

    @Post()
    async load(@Request() request, @Body() dataTableParameters: PaginationDto
    ): Promise<Pagination<USERDEFINATION>> {
      return await this.formService.load({
        limit: request.query.hasOwnProperty('limit') ? request.query.limit : dataTableParameters.length,
        page: request.query.hasOwnProperty('page') ? request.query.page : dataTableParameters.start,
        filterData:dataTableParameters.filterData,
        branchCode:dataTableParameters.branchCode
      });
    }
    @Get('/localData/:id')
    async editlocal(@Param() id): Promise<USERDEFINATION> {
      return this.formService.editlocal(id)
    }
    //Insertion 
    @Post('/insert')
    insert(@Body() userdefination: userdefinationDTO) {
      return this.formService.insert(userdefination);
    }
    //For append single row data
   
    @Get(':id')
    async edit(@Param() id): Promise<USERDEFINATION> {
      return this.formService.edit(id)
    }
     //Updation
     @Put('/update')
     update( @Body() userdefination: userdefinationDTO) {
   
       return this.formService.update(userdefination);
     }
    //deletion
    @Delete('delete/:id')
    delete(@Param('id') id) {
      this.formService.delete(id);
    }
  
    // dropdown
    // @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getuserdefinationList(){
      return this.formService.getuserdefinationList();
    }

    //Role Management System.
    @Post('roles')
    getRoles(@User() user: any){
      return this.formService.getRolesList();
    } 

    @Post('insert_roles')
    async insertRole(@Request() request, @Body() data){
      return this.formService.insertRoles(data);
    }

    //Role has permission record insert in to rolehaspermission table
    @Post('insert_role_permission')
    async insertRolehasPermission(@Request() request, @Body() data){
      return this.formService.insertRolehasPermission(data);
    }

    @Post('RoleMenuList')
    async getRoleMenuList(){
      return this.formService.getRoleMenuList();
    }


    @Post('update_roles')
    async updateRoles(@Body() data){
      return this.formService.updateRoles(data);
    }

    @Post('updateRoleBranch')
    async updateRoleBranch(@Body() data){
      return this.formService.updateRoleBranch(data);
    }

    @Post('testing')
    async testing(@User() user: any){
    }

    @Post('/update_user')
    async updateUser(@Body() data){
        return this.formService.update_user(data);
    }

    // @Post('/function:array')
    // async getNarrationCount(@Param('array') array){
    //   return this.formService.getNarrationCount(array);
    // }
    @Post('/function')
    async getNarrationCount(){
      return this.formService.getNarrationCount();
    }

    @Post('/resetpassword')
    async resetPassword(@Body() data:any){
      return this.formService.resetPassword(data)
    }

    //logout user
    @Post('/logout')
    async logout(@Body() data:any){
      return this.formService.logout(data);
    }
}
