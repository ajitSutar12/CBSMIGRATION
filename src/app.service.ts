import { Injectable } from '@nestjs/common';
import { getManager, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
export class AppService {
  constructor( ) { }
  getHello(): any {
    return { msg: 'Hello World!' };
  }
  async daybook(date) {
  }

}
