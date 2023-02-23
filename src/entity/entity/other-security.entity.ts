import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OTHERSECURITY {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  BRANCH_CODE: number;
  @ManyToOne(() => OWNBRANCHMASTER, (othersecbranchcode) => othersecbranchcode.othersecbranchcode, {
    cascade: true
  })
  @JoinColumn({ name: "BRANCH_CODE" })
  othersecbranchcode: OWNBRANCHMASTER[];

  @Column({ nullable: true })
  AC_ACNOTYPE: string;

  @Column({ nullable: true })
  AC_TYPE: number;
  @ManyToOne(() => SCHEMAST, (othersec) => othersec.othersec, {
    cascade: true
  })
  @JoinColumn({ name: "AC_TYPE" })

  othersec: SCHEMAST[];

  @Column({ nullable: true, default: 0 })
  AC_NO: string;

  @Column({ nullable: true })
  SECU_CODE: number;
  @ManyToOne(() => SECURITYMASTER, (other) => other.other, {
    cascade: true
  })
  @JoinColumn({ name: "SECU_CODE" })
  other: SECURITYMASTER[];

  @Column({ nullable: true })
  SR_NO: string;

  @Column({ nullable: true })
  SUBMISSION_DATE: string;

  @Column({ nullable: true })
  SHORT_DETAILS: string;

  @Column({ nullable: true })
  TOTAL_VALUE: string;

  @Column({ nullable: true })
  MARGIN: string;

  @Column({ nullable: true })
  DETAILS: string;

  @Column({ nullable: true })
  SECURITY_TYPE: string;
}