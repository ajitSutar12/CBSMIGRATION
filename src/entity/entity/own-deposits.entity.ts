import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OWNDEPOSIT {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  AC_ACNOTYPE: string;

  @Column({ nullable: true })
  AC_TYPE: number;
  @ManyToOne(() => SCHEMAST, (actypeowndepo) => actypeowndepo.actypeowndepo, {
    cascade: true
  })
  @JoinColumn({ name: "AC_TYPE" })
  actypeowndepo: SCHEMAST[];

  @Column({ default: 0, nullable:true })
  AC_NO: string;

  @Column({ nullable: true })
  BRANCH_CODE: number;
  @ManyToOne(() => OWNBRANCHMASTER, (owndeposit) => owndeposit.owndeposit, {
    cascade: true
  })
  @JoinColumn({ name: "BRANCH_CODE" })
  owndeposit: OWNBRANCHMASTER[];

  @Column({ nullable: true })
  DEPO_AC_TYPE: number;
  @ManyToOne(() => SCHEMAST, (depoactype) => depoactype.depoactype, {
    cascade: true
  })
  @JoinColumn({ name: "DEPO_AC_TYPE" })
  depoactype: SCHEMAST[];

  @Column({ nullable: true })
  SECU_CODE: number;
  @ManyToOne(() => SECURITYMASTER, (deposit) => deposit.deposit, {
    cascade: true
  })
  @JoinColumn({ name: "SECU_CODE" })
  deposit: SECURITYMASTER[];

  @Column({ default: 0 })
  DEPO_AC_NO: string;

  @Column({ nullable: true })
  SUBMISSION_DATE: string;

  @Column({ nullable: true })
  RECEIPT_NO: string;

  @Column({ nullable: true })
  DEPOSIT_AMT: string;

  @Column({ nullable: true })
  REMARK: string;

  @Column({ nullable: true })
  MATURITY_DATE: string;

  @Column({ nullable: true })
  MARGIN: string;

  @Column({ nullable: true })
  LEDGER_BAL: string;


  //lien mark clear fields
  @Column({ nullable: true })
  AC_EXPIRE_DATE: string

  @Column({ default: '0' })
  IS_LIEN_MARK_CLEAR: string

  @Column({ nullable: true })
  BALANCE_OF_LOAN_ACCOUNT: string
}
