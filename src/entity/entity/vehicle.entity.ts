import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VEHICLE {


  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  AC_ACNOTYPE: string;

  @Column({ nullable: true })
  AC_TYPE: number;
  @ManyToOne(() => SCHEMAST, (vehicle) => vehicle.vehicle, {
    cascade: true
  })
  @JoinColumn({ name: "AC_TYPE" })

  vehicle: SCHEMAST[];

  @Column({ nullable: true, default: 0 })
  AC_NO: string;



  @Column({ nullable: true })
  SECU_CODE: number;
  @ManyToOne(() => SECURITYMASTER, (vehiclesec) => vehiclesec.vehiclesec, {
    cascade: true
  })
  @JoinColumn({ name: "SECU_CODE" })
  vehiclesec: SECURITYMASTER[];

  @Column({ nullable: true })
  SUBMISSION_DATE: string;

  @Column({ nullable: true })
  RTO_REG_DATE: string;

  @Column({ nullable: true })
  VEHICLE_MAKE: string

  @Column({ nullable: true })
  MANUFACTURE_YEAR: string;

  @Column({ nullable: true })
  VEHICLE_NO: string;

  @Column({ nullable: true })
  CHASSIS_NO: string;

  @Column({ nullable: true })
  NEW_VEHICLE: string;

  @Column({ nullable: true })
  AQUISITION_DATE: string;

  @Column({ nullable: true })
  NEW_EQUIPEMENT: string;

  @Column({ nullable: true })
  SUPPLIER_NAME: string;

  @Column({ nullable: true })
  PURCHASE_PRICE: string;

  @Column({ nullable: true })
  MARGIN: string;

  @Column({ nullable: true })
  REMARK: string;

  @Column({ nullable: true })
  SECURITY_TYPE: string;

  @Column({ nullable: true })
  BRANCH_CODE: number;
  @ManyToOne(() => OWNBRANCHMASTER, (vehiclebranchcode) => vehiclebranchcode.vehiclebranchcode, {
    cascade: true
  })
  @JoinColumn({ name: "BRANCH_CODE" })
  vehiclebranchcode: OWNBRANCHMASTER[];

}