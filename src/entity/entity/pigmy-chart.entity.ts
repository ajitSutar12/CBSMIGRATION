import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PIGMYCHARTMASTER } from './pigmyChart.entity'
import { SCHEMAST } from './schemeParameters.entity'

@Entity()
export class PIGMYCHART {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  TRAN_NO: number;

  @Column()
  BRANCHCODE: number;

  @Column()
  BRANCH_ID: number;

  @Column()
  TRAN_DATE: string

  @Column()
  TRAN_TIME: string

  @Column({ default: "CS", length: 2 })
  TRAN_TYPE: string

  @Column({ default: "C", length: 1 })
  TRAN_DRCR: string

  @Column({ default: 1 })
  TRAN_MODE: string

  @Column()
  TRAN_AMOUNT: number

  @Column({ default: "1", length: 2 })
  TRAN_STATUS: string

  @Column({ default: "CH", length: 2 })
  ENTRY_TYPE: string

  @Column({ default: "AG", length: 2 })
  AGENT_ACNOTYPE: string

  @Column()
  AGENT_ACTYPE: number

  @Column()
  AGENT_ACNO: number

  @Column()
  AGENT_BANKACNO: string

  @Column({ nullable: true })
  CASHIER_CODE: string

  @Column()
  USER_CODE: string

  @Column()
  OFFICER_CODE: string

  @Column({ type: 'date', nullable: true })
  AUTO_VOUCHER_DATE: string

  @Column({ nullable: true })
  AUTO_VOUCHER_NO: number

  @Column()
  CHART_NO: number

  @Column({ nullable: true })
  BRANCH_CODE: number;

  @ManyToOne(() => OWNBRANCHMASTER, (BranchCode) => BranchCode.branchCodePigmyChart, {
    cascade: true
  })
  @JoinColumn({ name: "BRANCH_CODE" })
  BranchCode: OWNBRANCHMASTER[];

  @OneToMany(() => PIGMYCHARTMASTER, (pigmyChartMaster) => pigmyChartMaster.PIGMYCHART, {
    cascade: ["insert", "update"]
  })
  pigmyChartMaster: PIGMYCHARTMASTER[];

  @ManyToOne(() => SCHEMAST, (Scheme) => Scheme.pigmyChart, {
    cascade: true
  })
  @JoinColumn({ name: "AGENT_ACTYPE" })
  Scheme: SCHEMAST[];
}
