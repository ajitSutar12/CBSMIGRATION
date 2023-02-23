import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GOVTSECULIC {


  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  AC_ACNOTYPE: string;

  @Column({ nullable: true })
  AC_TYPE: number;
  @ManyToOne(() => SCHEMAST, (govsec) => govsec.govsec, {
    cascade: true
  })
  @JoinColumn({ name: "AC_TYPE" })

  govsec: SCHEMAST[];

  @Column({ nullable: true, default: 0 })
  AC_NO: string;

  @Column({ nullable: true })
  SECU_CODE: number;
  @ManyToOne(() => SECURITYMASTER, (govtseclic) => govtseclic.govtseclic, {
    cascade: true
  })
  @JoinColumn({ name: "SECU_CODE" })
  govtseclic: SECURITYMASTER[];

  @Column({ nullable: true })
  SUBMISSION_DATE: string;

  @Column({ nullable: true })
  CERT_POLICY_DATE: string;

  @Column({ nullable: true })
  CERT_POLICY_NO: string;

  @Column({ nullable: true })
  MARGIN: string;

  @Column({ nullable: true })
  ASSURED_NAME: string;

  @Column({ nullable: true })
  PAIDUP_AMT: string;

  @Column({ nullable: true })
  SUM_ASSURED: string;

  @Column({ nullable: true })
  PREMIUM: string;

  @Column({ nullable: true })
  SURRENDER_VALUE: string;

  @Column({ nullable: true })
  PREMIUM_DUE_DATE: string;

  @Column({ nullable: true })
  MATURE_DUE_DATE: string;

  @Column({ nullable: true })
  NOMINEE: string;

  @Column({ nullable: true })
  REMARK: string;

  @Column({ nullable: true })
  SECURITY_TYPE: string;

  @Column({ nullable: true })
  BRANCH_CODE: number;
  @ManyToOne(() => OWNBRANCHMASTER, (govtsecbranchcode) => govtsecbranchcode.govtsecbranchcode, {
    cascade: true
  })
  @JoinColumn({ name: "BRANCH_CODE" })
  govtsecbranchcode: OWNBRANCHMASTER[];

}