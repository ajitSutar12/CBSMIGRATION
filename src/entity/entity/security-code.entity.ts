import { BOOKDEBTS } from './book-debts.entity';
import { SECINSURANCE } from 'src/entity/entity/customer-insurance.entity';
import { FIREPOLICY } from 'src/entity/entity/fire-policy.entity';
import { FURNITURE } from 'src/entity/entity/furniture-and-fixture.entity';
import { GOLDSILVER } from 'src/entity/entity/gold-and-silver.entity';
import { GOVTSECULIC } from 'src/entity/entity/govt-security-and-lic.entity';
import { LANDBUILDING } from 'src/entity/entity/land-and-buildings.entity';
import { MARKETSHARE } from 'src/entity/entity/market-shares.entity';
import { OTHERSECURITY } from 'src/entity/entity/other-security.entity';
import { OWNDEPOSIT } from 'src/entity/entity/own-deposits.entity';
import { PLANTMACHINARY } from 'src/entity/entity/plant-and-machinery.entity';
import { PLEDGESTOCK } from './pleadge-stock.entity';
import { STOCKSTATEMENT } from 'src/entity/entity/stock-statement.entity';
import { VEHICLE } from 'src/entity/entity/vehicle.entity';
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SECURITYMASTER {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  SECU_CODE: number;

  @Column({ nullable: true })
  SECU_NAME: string;

  @Column({ nullable: true })
  MARGIN: string;

  @Column({ nullable: true, default: 0 })
  FIRE_POLICY: string;

  @Column({ nullable: true, default: 0 })
  MARKET_SHARE: string;

  @Column({ nullable: true, default: 0 })
  BOOK_DEBTS: string;

  @Column({ nullable: true, default: 0 })
  PLEDGE_STOCK: string;

  @Column({ nullable: true, default: 0 })
  STOCK_STATEMENT: string;

  @Column({ nullable: true, default: 0 })
  GOVT_SECU_LIC: string;

  @Column({ nullable: true, default: 0 })
  PLANT_MACHINARY: string

  @Column({ nullable: true, default: 0 })
  FURNITURE_FIXTURE: string;

  @Column({ nullable: true, default: 0 })
  VEHICLE: string;

  @Column({ nullable: true, default: 0 })
  OWN_DEPOSIT: string;

  @Column({ nullable: true, default: 0 })
  LAND_BUILDING: string;

  @Column({ nullable: true, default: 0 })
  GOLD_SILVER: string;

  @Column({ nullable: true, default: 0 })
  OTHER_SECURITY: string;

  @Column({ nullable: true, default: 0 })
  CUST_INSURANCE: string;

  @OneToMany(() => BOOKDEBTS, bookdebts => bookdebts.bookdebts, {
    cascade: ["insert", "update"]
  })
  bookdebts: BOOKDEBTS[];

  @OneToMany(() => SECINSURANCE, custinsurance => custinsurance.custinsurance, {
    cascade: ["insert", "update"]
  })
  custinsurance: SECINSURANCE[];

  @OneToMany(() => FIREPOLICY, firepolicy => firepolicy.firepolicy, {
    cascade: ["insert", "update"]
  })
  firepolicy: FIREPOLICY[];

  @OneToMany(() => FURNITURE, furfixture => furfixture.furfixture, {
    cascade: ["insert", "update"]
  })
  furfixture: FURNITURE[];

  @OneToMany(() => GOLDSILVER, silvergold => silvergold.silvergold, {
    cascade: ["insert", "update"]
  })
  silvergold: GOLDSILVER[];

  @OneToMany(() => GOVTSECULIC, govtseclic => govtseclic.govtseclic, {
    cascade: ["insert", "update"]
  })
  govtseclic: GOVTSECULIC[];

  @OneToMany(() => LANDBUILDING, landbuilding => landbuilding.landbuilding, {
    cascade: ["insert", "update"]
  })
  landbuilding: LANDBUILDING[];

  @OneToMany(() => MARKETSHARE, share => share.share, {
    cascade: ["insert", "update"]
  })
  share: MARKETSHARE[];

  @OneToMany(() => OTHERSECURITY, other => other.other, {
    cascade: ["insert", "update"]
  })
  other: OTHERSECURITY[];

  @OneToMany(() => OWNDEPOSIT, deposit => deposit.deposit, {
    cascade: ["insert", "update"]
  })
  deposit: OWNDEPOSIT[];

  @OneToMany(() => PLANTMACHINARY, plant => plant.plant, {
    cascade: ["insert", "update"]
  })
  plant: PLANTMACHINARY[];

  @OneToMany(() => PLEDGESTOCK, stock => stock.stock, {
    cascade: ["insert", "update"]
  })
  stock: PLEDGESTOCK[];

  @OneToMany(() => STOCKSTATEMENT, stockstat => stockstat.stockstat, {
    cascade: ["insert", "update"]
  })
  stockstat: STOCKSTATEMENT[];

  @OneToMany(() => VEHICLE, vehiclesec => vehiclesec.vehiclesec, {
    cascade: ["insert", "update"]
  })
  vehiclesec: VEHICLE[];

}
