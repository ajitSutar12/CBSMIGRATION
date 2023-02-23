import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { COBORROWER } from './coborrower.entity';
import { IDMASTER } from './customer-id.entity';
import { LNDISPUTEDETAILS } from './dispute-loan-master.entity';
import { GUARANTERDETAILS } from './guarantor.entity';
import { SECURITYDETAILS } from './security.entity';
import { PURPOSEMASTER } from './purpose-master.entity';
import { AUTHORITYMASTER } from './authority-master.entity';


@Entity()
export class LNMASTER {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string

    @Column({ nullable: true })
    AC_TYPE: number

    @Column()
    AC_NO: number

    @Column({ nullable: true })
    AC_CUSTID: number

    @Column()
    BANKACNO: string

    @Column({ nullable: true })
    AC_NAME: string

    @Column({ nullable: true })
    AC_OPDATE: string

    @Column({ nullable: true })
    AC_OPEN_OLD_DATE: string

    @Column({ nullable: true, default: 0 })
    AC_IS_RECOVERY: string;

    @Column({ nullable: true, default: 0 })
    IS_WEAKER: string;

    @Column({ nullable: true })
    REF_ACNO: string

    @Column({ nullable: true })
    AC_INTCATA: string

    @Column({ nullable: true })
    AC_SANCTION_AMOUNT: string

    @Column({ nullable: true })
    AC_SANCTION_DATE: string

    @Column({ nullable: true })
    AC_DRAWPOWER_AMT: string

    @Column({ nullable: true })
    AC_MONTHS: string

    @Column({ nullable: true })
    AC_EXPIRE_DATE: string

    @Column({ nullable: true })
    AC_INTRATE: string

    @Column({ nullable: true })
    AC_REPAYMODE: string

    @Column({ nullable: true })
    INSTALLMENT_METHOD: string

    @Column({ nullable: true })
    AC_INSTALLMENT: string

    @Column({ nullable: true })
    AC_MORATORIUM_PERIOD: string

    @Column({ nullable: true })
    AC_GRACE_PERIOD: string

    @Column({ nullable: true })
    AC_AUTHORITY: number
    @ManyToOne(() => AUTHORITYMASTER, (authority) => authority.authority, {
        cascade: true
    })
    @JoinColumn({ name: "AC_AUTHORITY" })
    authority: AUTHORITYMASTER[];

    @Column({ nullable: true })
    AC_RECOMMEND_BY: string

    @Column({ nullable: true })
    AC_RECOVERY_CLERK: string

    @Column({ nullable: true })
    AC_PRIORITY: string

    @Column({ nullable: true })
    AC_PRIORITY_SUB1: string

    @Column({ nullable: true })
    AC_PRIORITY_SUB2: string

    @Column({ nullable: true })
    AC_PRIORITY_SUB3: string

    @Column({ nullable: true })
    AC_WEAKER: string

    @Column({ nullable: true })
    AC_PURPOSE: number
    @ManyToOne(() => PURPOSEMASTER, (purpose) => purpose.purpose, {
        cascade: true
    })
    @JoinColumn({ name: "AC_PURPOSE" })
    purpose: PURPOSEMASTER[];

    @Column({ nullable: true })
    AC_INDUSTRY: string

    @Column({ nullable: true })
    AC_HEALTH: string

    @Column({ nullable: true })
    AC_RELATION_TYPE: string

    @Column({ nullable: true })
    AC_DIRECTOR: string

    @Column({ nullable: true })
    AC_DIRECTOR_RELATION: string

    @Column({ nullable: true })
    AC_COREG_NO: string

    @Column({ nullable: true })
    AC_COREG_DATE: string

    @Column({ nullable: true })
    AC_COREG_AMT: string

    @Column({ nullable: true })
    AC_RESO_NO: string

    @Column({ nullable: true })
    AC_RESO_DATE: string
    //freez account fields
    @Column({ nullable: true })
    AC_FREEZE_STATUS: string

    @Column({ default: 0 })
    AC_FREEZE_AMOUNT: number

    @Column({ nullable: true })
    AC_FREEZE_DATE: string

    @Column({ nullable: true })
    AC_FREEZE_REASON: string

    //overdraft fields
    @Column({ nullable: true })
    AC_ODAMT: string

    @Column({ nullable: true })
    AC_SODAMT: string

    @Column({ nullable: true })
    AC_ODDAYS: string

    @Column({ nullable: true })
    AC_ODDATE: string

    @Column({ nullable: true })
    AC_REMARK: string

    @Column({ nullable: true, default: 1 })
    status: number

    @Column({ nullable: true })
    AC_CLOSEDT: string

    @Column({ default: 0 })
    AC_CLOSED: number

    @CreateDateColumn()
    SYSADD_DATETIME: Date;

    @Column({ nullable: true })
    SYSADD_LOGIN: string;

    @UpdateDateColumn()
    SYSCHNG_DATETIME: Date;

    @Column({ nullable: true })
    SYSCHNG_LOGIN: string;

    //dormant field
    @Column({ default: false })
    IS_DORMANT: boolean;

    @Column({ nullable: true })
    AUTO_MATURED_PAYABLEAMT: string

    @Column({ nullable: true })
    AUTO_MATURED_INTERESTAMT: string

    //NPA opening Details Entry fields
    @Column({ nullable: true })
    AC_ACTDATE: string

    @Column({ nullable: true })
    AC_OP_TOTAL_DEPOSITAMT: string

    @Column({ nullable: true })
    OP_POSTED_INT: string

    @Column({ nullable: true })
    IS_DISPUTE_LOAN: string

    @Column({ default: 0 })
    IS_POST_INT_AC: number

    @Column({ nullable: true })
    AC_OP_BAL: string;

    @Column({ nullable: true })
    AC_PAYBLEINT_OP: string;

    @Column({ nullable: true })
    AC_PINT_OP: string;

    @Column({ nullable: true })
    AC_MEMBTYPE: string;


    @Column({ nullable: true })
    AC_MEMBNO: string;

    //relation

    @Column({ unique: false })
    idmasterID: number

    @ManyToOne(() => IDMASTER, (termLoan) => termLoan.termLoan, {
        cascade: true
    })
    @JoinColumn({ name: "idmasterID" })
    idmaster: IDMASTER[];

    @OneToMany(() => GUARANTERDETAILS, guaranterMaster => guaranterMaster.lnmaster, {
        cascade: ["insert", "update"]
    })
    guaranterMaster: GUARANTERDETAILS[];

    @OneToMany(() => COBORROWER, CoborrowerMaster => CoborrowerMaster.lnmaster, {
        cascade: ["insert", "update"]
    })
    CoborrowerMaster: COBORROWER[];
    lnmaster: any;

    @OneToMany(() => LNDISPUTEDETAILS, disputeloan => disputeloan.lnDisputemasterID, {
        cascade: ["insert", "update"]
    })
    disputeloanMaster: LNDISPUTEDETAILS[];

    @OneToMany(() => SECURITYDETAILS, securityMaster => securityMaster.lnmaster, {
        cascade: ["insert", "update"]
    })
    securityMaster: SECURITYDETAILS[];

    @Column({ nullable: true })
    BRANCH_CODE: number;

    @ManyToOne(() => OWNBRANCHMASTER, (BranchCodeMaster) => BranchCodeMaster.branchCodeLN, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    BranchCodeMaster: OWNBRANCHMASTER[];

    @ManyToOne(() => SCHEMAST, (LNCCMaster) => LNCCMaster.lncccode, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })

    LNCCMaster: SCHEMAST[];

    @OneToMany(() => LNMASTER, termLoan => termLoan.termLoan, {
        cascade: ["insert", "update"]
    })
    termLoan: LNMASTER[];
    // @OneToMany(() => LNACINTRATE, (lnacint) => lnacint.lnacintrate, {
    //     cascade: ["insert", "update"]
    // })
    // lnacint: LNACINTRATE[]


    // @OneToMany(() => NOMINEELINK, (nomineeDetails) => nomineeDetails.sharesId, {
    //     cascade: ["insert", "update"]
    // })
    // nomineeDetails: NOMINEELINK[]



    @Column({ nullable: true })
    AC_SECURITY_AMT: string


    @Column({ nullable: true })
    AC_OP_CD: string

    @Column({ nullable: true })
    AC_BALDATE: string

    @Column({ nullable: true })
    AC_PAID_INT_OP: string

    @Column({ nullable: true })
    AC_LINTEDT: string

    @Column({ nullable: true })
    AC_RECBLEODUEINT_OP: string

    @Column({ nullable: true })
    OP_NPA_DATE: string


    @Column({ nullable: true })
    AC_LINTDT: string


    @Column({ default: 0 })
    IS_AGGRI_LOAN: number

}