import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { INSUARANCEMASTER } from './insurance-master.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SECINSURANCE {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  AC_ACNOTYPE: string;

  @Column({ nullable: true })
  BRANCH_CODE: number;
  @ManyToOne(() => OWNBRANCHMASTER, (secinsubranch) => secinsubranch.secinsubranch, {
    cascade: true
  })
  @JoinColumn({ name: "BRANCH_CODE" })
  secinsubranch: OWNBRANCHMASTER[];

  @Column({ nullable: true })
  AC_TYPE: number;
  @ManyToOne(() => SCHEMAST, (custinsurace) => custinsurace.custinsurace, {
    cascade: true
  })
  @JoinColumn({ name: "AC_TYPE" })

  custinsurace: SCHEMAST[];

  @Column({ nullable: true, default: 0 })
  AC_NO: string;

  @Column({ nullable: true })
  INSURANCE_DATE: string;

  @Column({ nullable: true })
  POLICY_NO: string;

  @Column({ nullable: true })
  INSU_COMPANY_CODE: number;
  @ManyToOne(() => INSUARANCEMASTER, (custinsurancemaster) => custinsurancemaster.custinsurancemaster, {
    cascade: true
  })
  @JoinColumn({ name: "INSU_COMPANY_CODE" })

  custinsurancemaster: INSUARANCEMASTER[];

  @Column({ nullable: true })
  INSU_EXP_DATE: string;

  @Column({ nullable: true })
  INSU_AMOUNT: string;

  @Column({ nullable: true })
  SECURITY_TYPE: string;

  @Column({ nullable: true })
  SECU_CODE: number;
  @ManyToOne(() => SECURITYMASTER, (custinsurance) => custinsurance.custinsurance, {
    cascade: true
  })
  @JoinColumn({ name: "SECU_CODE" })
  custinsurance: SECURITYMASTER[];

}