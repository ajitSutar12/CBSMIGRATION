import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IDMASTER } from './customer-id.entity';
import { JointAcLink } from './joint-account.entity';
import { NOMINEELINK } from './nominee.entity';
import { ATTERONEYLINK } from './power-of-attorney.entity';
import { INTCATEGORYMASTER } from './interest-category-master.entity'
import { CATEGORYMASTER } from './category-master.entity'
import { OPERATIONMASTER } from './operation-master.entity'
import { BALACATA } from './minimum-balance-master.entity'
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { PGMASTER } from './pgmaster.entity';

@Entity()
export class DPMASTER {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string

    @Column({ nullable: true })
    AC_TYPE: number

    @Column()
    AC_NO: number

    @Column({ default: '---' })
    BANKACNO: string

    @Column({ nullable: true })
    AC_NAME: string;

    @Column({ nullable: true })
    AC_CATG: number

    @Column({ nullable: true })
    AC_BALCATG: number

    @Column({ nullable: true })
    AC_OPR_CODE: number

    @Column({ nullable: true })
    AC_CUSTID: number

    @Column({ nullable: true })
    AC_INTCATA: number

    @Column({ nullable: true })
    AC_OPDATE: string

    @Column({ nullable: true })
    AC_SCHMAMT: string

    @Column({ nullable: true })
    REF_ACNO: string

    @Column({ nullable: true, default: 0 })
    AC_MINOR: string

    @Column({ nullable: true })
    AC_MBDATE: string

    @Column({ nullable: true })
    AC_GRDNAME: string

    @Column({ nullable: true })
    AC_GRDRELE: string

    @Column({ nullable: true })
    AUTO_MATURED_PAYABLEAMT: string

    @Column({ nullable: true })
    AUTO_MATURED_INTERESTAMT: string

    @Column({ nullable: true })
    AC_INTROBRANCH: number
    @ManyToOne(() => OWNBRANCHMASTER, (BranchMaster) => BranchMaster.branch, {
        cascade: true
    })
    @JoinColumn({ name: "AC_INTROBRANCH" })
    BranchMaster: OWNBRANCHMASTER[];


    @Column({ nullable: true })
    AC_INTROID: string

    @Column({ nullable: true })
    AC_INTRACNO: string

    @Column({ nullable: true })
    AC_INTRNAME: string

    @Column({ nullable: true })
    SIGNATURE_AUTHORITY: string

    @Column({ default: 0 })
    IS_POST_INT_AC: number

    //current Account field
    @Column({ nullable: true })
    AC_PROPRITOR_NAME: string

    //Pigmy agent
    @Column({ nullable: true })
    PIGMY_ACTYPE: number;
    @ManyToOne(() => SCHEMAST, (PGDPMaster) => PGDPMaster.PGDPMaster, {
        cascade: true
    })
    @JoinColumn({ name: "PIGMY_ACTYPE" })
    PGDPMaster: SCHEMAST[];

    //INVESTMENT  

    @Column({ nullable: true })
    INVEST_BANK: string

    @Column({ nullable: true })
    INVEST_BRANCH: string

    @Column({ nullable: true })
    AC_REF_RECEIPTNO: string

    @Column({ nullable: true })
    AC_ASON_DATE: string

    @Column({ nullable: true })
    AC_EXPDT: string

    @Column({ nullable: true })
    AC_MONTHS: string

    @Column({ nullable: true })
    AC_DAYS: string

    @Column({ nullable: true })
    AC_INTRATE: string

    @Column({ nullable: true })
    AC_MATUAMT: string

    @Column({ nullable: true })
    AC_CLOSEDT: string

    //Anamat form entity


    @Column({ nullable: true })
    DEBIT: string;

    @Column({ nullable: true })
    AC_PARTICULAR: string;

    @Column({ default: 0 })
    AC_IS_RECOVERY: string;

    @CreateDateColumn()
    SYSADD_DATETIME: Date;

    @Column({ nullable: true })
    SYSADD_LOGIN: string;

    @UpdateDateColumn()
    SYSCHNG_DATETIME: Date;

    @Column({ nullable: true })
    SYSCHNG_LOGIN: string;

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
    AC_MEMBTYPE: string;

    @Column({ nullable: true })
    AC_MEMBNO: string;

    @Column({ nullable: true })
    AC_OP_BAL: string;

    //dormant field
    @Column({ default: false })
    IS_DORMANT: boolean;

    //term deposit field

    @Column({ nullable: true, default: 0 })
    IS_DISCOUNTED_INT_RATE: string;

    //relation

    @Column({ nullable: true })
    idmasterID: number

    @Column({ nullable: true, default: 1 })
    status: number


    @ManyToOne(() => IDMASTER, (idmaster) => idmaster.dpmaster, {
        cascade: true
    })
    @JoinColumn({ name: "idmasterID" })
    idmaster: IDMASTER[];

    @OneToMany(() => NOMINEELINK, (nomineeDetails) => nomineeDetails.dpmasterId, {
        cascade: ["insert", "update"]
    })
    nomineeDetails: NOMINEELINK[]

    @OneToMany(() => JointAcLink, (jointAccounts) => jointAccounts.dpmasterId, {
        cascade: ["insert", "update"]
    })
    jointAccounts: JointAcLink[]

    @OneToMany(() => ATTERONEYLINK, (powerOfAttorney) => powerOfAttorney.dpmasterId, {
        cascade: ["insert", "update"]
    })
    powerOfAttorney: ATTERONEYLINK[]

    @ManyToOne(() => INTCATEGORYMASTER, (intCategory) => intCategory.interestCategory, {
        cascade: true
    })
    @JoinColumn({ name: "AC_INTCATA" })
    intCategory: INTCATEGORYMASTER[];

    @ManyToOne(() => CATEGORYMASTER, (CategoryMaster) => CategoryMaster.DPcategory, {
        cascade: true
    })
    @JoinColumn({ name: "AC_CATG" })
    CategoryMaster: CATEGORYMASTER[];

    @ManyToOne(() => OPERATIONMASTER, (OperationMaster) => OperationMaster.operation, {
        cascade: true
    })
    @JoinColumn({ name: "AC_OPR_CODE" })
    OperationMaster: OPERATIONMASTER[];

    @ManyToOne(() => BALACATA, (MinimumBalanceMaster) => MinimumBalanceMaster.minimumBalance, {
        cascade: true
    })
    @JoinColumn({ name: "AC_BALCATG" })
    MinimumBalanceMaster: BALACATA[];

    @Column({ nullable: true })
    BRANCH_CODE: number;

    @ManyToOne(() => OWNBRANCHMASTER, (BranchCodeMaster) => BranchCodeMaster.branchcode, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    BranchCodeMaster: OWNBRANCHMASTER[];

    @ManyToOne(() => SCHEMAST, (DPMaster) => DPMaster.DPschemecode, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })
    DPMaster: SCHEMAST[];



    @Column({ nullable: true })
    AC_CLOSED: string

    @Column({ nullable: true })
    AC_PRODUCT: string

    @Column({ nullable: true })
    AC_LINTEDT: string

    @Column({ nullable: true })
    AC_BALDATE: string

    @Column({ nullable: true })
    AC_ACTDATE: string

    @Column({ nullable: true })
    AC_OP_CD: string

    @Column({ nullable: true })
    AC_PINT_OP: string

    @Column({ nullable: true })
    AC_PAYBLEINT_OP: string

    @Column({ nullable: true })
    AC_ODEPINS: string

    @Column({ nullable: true })
    AC_PAID_INT_OP: string

    @Column({ nullable: true })
    OP_CR_INT_FIN_YEAR: string

    @Column({ nullable: true })
    OP_INT_PAID_FIN_YEAR: string

    @Column({ nullable: true })
    LAST_TDS_DATE: string

  
    @Column({ nullable: true })
    AC_LINTDT : string




}
