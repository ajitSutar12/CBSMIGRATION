// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// export const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   username: 'bankuser',
//   password: 'bank@bhairavnath',
//   port: 5432,
//   host: '139.59.63.215',
//   database:'bh_cbs',
//   // database: 'CBSBHAIRAVNATHBARNCH',
//   synchronize: false,
//   // synchronize: true,
//   logging: false,
//   // logging: true,
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   migrations: ["dist/migration/*{.ts,.js}"],
//   cli: {
//     migrationsDir: 'src/migration'
//   },
// };

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  // username: 'bankuser', //bhairavnath username
  password: 'shubhangi',
  // password: 'bank@bhairavnath', //bhairavnath password
  port: 5432,
  host: '127.0.0.1',
  // host: '139.59.63.215',
  // database: 'tests',
  database: 'datamigration',
  // database: 'bhairavnath_cbs',
  synchronize: false,
  // synchronize: true,
  logging: false,
  // logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ["dist/migration/*{.ts,.js}"],
  cli: {
    migrationsDir: 'src/migration'
  },
};