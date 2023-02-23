import { BRANCHMASTER } from './clearing-branch-master.entity';
import { DEPRCATEGORY } from './depriciation-category-master.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, PrimaryColumn, OneToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
@Entity()
export class ACMASTER {
  @PrimaryColumn()
  id: number;

  @Column()
  AC_NO: number

  @Column()
  AC_NAME: string

  @Column()
  AC_BCD: string

  @Column()
  BRANCH_CODE: number

  @Column({ nullable: true })
  AC_OPDATE: string

  @Column({ default: 0 })
  IS_POST_INT_AC: number

  @Column({ nullable: true })
  AC_MEMBNO: number

  @Column({ nullable: true })
  IS_DIRECT_ENTRY_ALLOW: boolean

  @Column({ nullable: true })
  IS_RED_BALANCE_AC: boolean

  @Column({ nullable: true })
  AC_IS_CASH_IN_TRANSIT: boolean

  @Column({ nullable: true })
  IS_TAXABLEFOR_GST: boolean

  @Column({ nullable: true })
  IS_ACTIVE: boolean

  @Column({ default: 'GL' })
  AC_ACNOTYPE: string

  @Column()
  AC_TYPE: number

  @Column({ nullable: true })
  AC_SUBSCODE: number

  @Column({ nullable: true })
  AC_CLOSEDT: string

  @Column({ nullable: true })
  AUTO_MATURED_PAYABLEAMT: string

  @Column({ nullable: true })
  AUTO_MATURED_INTERESTAMT: string

  // @Column({ nullable: true })
  // AC_OPDATE: string

  // @Column({ nullable: true })
  // IS_POST_INT_AC: string

  // @Column({ nullable: true })
  // AC_MEMBNO: string

  //dormant field
  @Column({ default: false })
  IS_DORMANT: boolean;

  @OneToMany(() => BRANCHMASTER, clearingBranch => clearingBranch.accountNo, {
    cascade: ["insert", "update"]
  })
  clearingBranch: BRANCHMASTER[];

  @OneToMany(() => OWNBRANCHMASTER, ownBranch => ownBranch.accNo, {
    cascade: ["insert", "update"]
  })
  ownBranch: OWNBRANCHMASTER[];


  @OneToMany(() => DEPRCATEGORY, deprecat => deprecat.depaccountno, {
    cascade: ["insert", "update"]
  })
  deprecat: DEPRCATEGORY[];


  @ManyToOne(() => SCHEMAST, (glAcMaster) => glAcMaster.glAcMaster, {
    cascade: true
  })
  @JoinColumn({ name: "AC_TYPE" })
  glAcMaster: SCHEMAST[];

}
