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
  database: 'sidhanerli',
  // database: 'bhairavnath_cbs',
  // synchronize: false,
  synchronize: true,
  logging: false,
  // logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ["dist/migration/*{.ts,.js}"],
  cli: {
    migrationsDir: 'src/migration'
  },
};