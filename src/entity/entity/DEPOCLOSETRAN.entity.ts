import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { DEPOCLOSETRANSAC } from './DEPOCLOSETRANSAC.entity';

@Entity()
export class DEPOCLOSETRAN {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_NO: number

    @Column()
    TRAN_DATE: string

    @Column({ nullable: true })
    TRAN_TIME: string

    @Column()
    TRAN_TYPE: string

    @Column()
    BRANCH_CODE: number

    @Column()
    TRAN_ACNOTYPE: string

    @Column({ nullable: true })
    TRAN_ACTYPE: number

    @Column()
    TRAN_ACNO: string

    @Column({ nullable: true })
    LEDGER_BAL: string

    @Column({ nullable: true })
    EXCESS_INT: string

    @Column({ nullable: true })
    TDS_AMOUNT: string

    @Column({ nullable: true })
    SURCHARGE_AMOUNT: string

    @Column({ nullable: true })
    COMMISSION_CHARGES: string

    @Column({ nullable: true })
    COMMISSION_GLACNO: number

    @Column({ nullable: true })
    OTHER_CHARGES_AMOUNT: string

    @Column({ nullable: true })
    OTHER_CHARGES_GLACNO: number

    @Column({ nullable: true })
    PENAL_INTEREST_AMOUNT: string

    @Column({ nullable: true })
    PAID_INTEREST_AMOUNT: string

    @Column({ nullable: true })
    NET_INTEREST_AMOUNT: string

    @Column({ nullable: true })
    UNPAID_CASHINT_AMOUNT: string

    @Column({ nullable: true })
    TOTAL_INTEREST_AMOUNT: string

    @Column({ nullable: true })
    NET_PAYABLE_AMOUNT: string

    @Column({ nullable: true })
    INTEREST_RATE: string

    @Column({ nullable: true })
    IS_PREMATURE_CLOSE: number

    @Column({ nullable: true })
    TRAN_STATUS: number

    @Column({ nullable: true })
    TOKEN_NO: number

    @Column({ nullable: true })
    CASHIER_CODE: string

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    PAYABLE_INTEREST_AMOUNT: string

    @Column({ nullable: true })
    AUTO_MATURED_PAYABLEAMT: number

    @Column({ nullable: true })
    AFT_MATURE_INT_RATE: string

    @Column({ nullable: true })
    AFT_MATURE_INT_AMT: string

    @Column({ nullable: true })
    CHEQUE_SERIES: string

    @Column({ nullable: true })
    CHEQUE_NO: string

    @Column({ nullable: true })
    CHEQUE_DATE: string
    @CreateDateColumn()
    SYSADD_DATETIME: Date;

    @Column({ nullable: true })
    SYSADD_LOGIN: string;

    @UpdateDateColumn()
    SYSCHNG_DATETIME: Date;

    @Column({ nullable: true })
    SYSCHNG_LOGIN: string;

    @Column({ nullable: true, default: 1 })
    status: number

    @OneToMany(() => DEPOCLOSETRANSAC, (depocloseTranNo) => depocloseTranNo.depocloseTranNo)
    depocloseTranNo: DEPOCLOSETRANSAC[]

    
    @ManyToOne(() => SCHEMAST, (depocloseTran) => depocloseTran.depocloseTran, {
        cascade: true
    })
    @JoinColumn({ name: "TRAN_ACTYPE" })
    depocloseTran: SCHEMAST[];

}
