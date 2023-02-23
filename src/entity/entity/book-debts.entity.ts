import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BOOKDEBTS {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;
    @ManyToOne(() => OWNBRANCHMASTER, (bookbrach) => bookbrach.bookbrach, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    bookbrach: OWNBRANCHMASTER[];


    @Column({ nullable: true, default: 0 })
    AC_NO: string;

    @Column({ nullable: true })
    SECU_CODE: number;
    @ManyToOne(() => SECURITYMASTER, (bookdebts) => bookdebts.bookdebts, {
        cascade: true
    })
    @JoinColumn({ name: "SECU_CODE" })
    bookdebts: SECURITYMASTER[];


    @Column({ nullable: true })
    SR_NO: string;

    @Column({ nullable: true })
    SUBMISSION_DATE: string;

    @Column({ nullable: true })
    STATEMENT_DATE: string;

    @Column({ nullable: true })
    DEBTORS_OP_BAL: string;

    @Column({ nullable: true })
    CREDIT_SALE: string;

    @Column({ nullable: true })
    RECOVERY: string;

    @Column({ nullable: true })
    OVERAGED_DEBTORS: string;

    @Column({ nullable: true })
    CLOSE_BAL: string;

    @Column({ nullable: true })
    CRD_OUTSTAND_BAL: string;

    @Column({ nullable: true })
    MARGIN: string;

    @Column({ nullable: true })
    REMARK: string;

    @Column({ nullable: true })
    SECURITY_TYPE: string;

    @Column({ nullable: true })
    AC_TYPE: number;
    @ManyToOne(() => SCHEMAST, (scheme) => scheme.bookdebts, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })
    scheme: SCHEMAST[];
}