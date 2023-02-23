import { Controller, Get, Request, Post, UseGuards, Res, HttpService, Param, Body } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private authService: AuthService, private http: HttpService, private _service: AppService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('role')
  getRole() {
    return 'data is working';
  }

  @Post('daybook')
  async daybook(@Body('date') date) {
    return await this._service.daybook(date)
  }

  @Get('testingPerformance')
  getTestingData(@Res() res) {
    let totalgold = 0;
    let totalsilver = 0;
    let totalCount = 0;
    let obj = {};
    this.http.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json')
      .toPromise()
      .then(function (res) {
        // console.log(res);
        res.data.forEach(element => {
          totalCount = totalCount + 1;
          if (element.type == 'CreateEvent') {
            totalgold = totalgold + 1;
          } else {
            totalsilver = totalsilver + 1;
          }
        });
        console.log(totalgold - totalsilver)
        console.log(totalCount);
        obj['result'] = totalgold - totalsilver;
      })

    console.log(obj);
    return obj;
  }
}