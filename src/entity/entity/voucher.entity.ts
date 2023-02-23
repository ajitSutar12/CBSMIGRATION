import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class DAILYTRAN {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_NO: number;

    @Column()
    SERIAL_NO: number;

    @Column()
    TRAN_DATE: string;

    @Column()
    TRAN_TIME: string;

    @Column()
    TRAN_TYPE: string;

    @Column()
    TRAN_MODE: string;

    @Column()
    TRAN_DRCR: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;

    @Column()
    TRAN_ACNOTYPE: string;

    @Column()
    TRAN_ACTYPE: string;

    @Column()
    TRAN_ACNO: string;

    @Column({ nullable: true })
    TRAN_GLACNO: string;

    @Column({ default: 'AG' })
    AGENT_ACNOTYPE: string;

    @Column({ nullable: true })
    AGENT_ACTYPE: string;

    @Column({ nullable: true })
    AGENT_ACNO: string;

    @Column({ nullable: true })
    INTEREST_GLACNO: string;

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    NARRATION: string;

    @Column({ nullable: true })
    TOKEN_NO: string;

    @Column({ nullable: true })
    TRAN_AMOUNT: string;

    @Column({ nullable: true })
    WITHDRAW_NO: string;

    @Column({ nullable: true })
    CHEQUE_DATE: string;

    @Column({ nullable: true })
    CHEQUE_SERIES: string;

    @Column({ nullable: true })
    CHEQUE_NO: string;

    @Column({ nullable: true })
    BANK_ACNO: string;

    @Column({ nullable: true })
    USER_CODE: string;

    @Column({ nullable: true })
    OFFICER_CODE: string;

    @Column({ nullable: true })
    AC_CLOSED: string;

    @Column({ nullable: true })
    CASH_REMITANCE_STATUS: string;

    @Column({ nullable: true })
    CASH_SEND_WITH_PERSON: string;

    @Column({ nullable: true })
    TRAN_SOURCE_TYPE: string

    @Column({ nullable: true })
    TRAN_SOURCE_NO: number;

    @Column({ nullable: true })
    RECPAY_INT_AMOUNT: string;

    @Column({ nullable: true })
    INTEREST_AMOUNT: string;

    @Column({ nullable: true })
    DD_COMMISSION_ACNO: number

    @Column({ nullable: true })
    DD_COMMISSION_AMT: string;

    @Column({ nullable: true })
    INTEREST_DATE: string;

    @Column({ nullable: true })
    OTHER1_ACNO: string;

    @Column({ nullable: true })
    OTHER2_ACNO: string;

    @Column({ nullable: true })
    OTHER3_ACNO: string;

    @Column({ nullable: true })
    OTHER4_ACNO: string;

    @Column({ nullable: true })
    OTHER5_ACNO: string;

    @Column({ nullable: true })
    OTHER6_ACNO: string;

    @Column({ nullable: true })
    OTHER7_ACNO: string;

    @Column({ nullable: true })
    OTHER8_ACNO: string;

    @Column({ nullable: true })
    OTHER9_ACNO: string;

    @Column({ nullable: true })
    OTHER10_ACNO: string;

    @Column({ nullable: true })
    OTHER1_AMOUNT: string;

    @Column({ nullable: true })
    OTHER2_AMOUNT: string;

    @Column({ nullable: true })
    OTHER3_AMOUNT: string;

    @Column({ nullable: true })
    OTHER4_AMOUNT: string;

    @Column({ nullable: true })
    OTHER5_AMOUNT: string;

    @Column({ nullable: true })
    OTHER6_AMOUNT: string;

    @Column({ nullable: true })
    OTHER7_AMOUNT: string;

    @Column({ nullable: true })
    OTHER8_AMOUNT: string;

    @Column({ nullable: true })
    OTHER9_AMOUNT: string;

    @Column({ nullable: true })
    OTHER10_AMOUNT: string;

    @Column({ nullable: true })
    PENAL_INT_GLACNO: number;

    @Column({ nullable: true })
    PENAL_INT_AMOUNT: string;

    @Column({ nullable: true })
    RECPAY_INT_GLACNO: number;

    @Column({ nullable: true, default: 0 })
    IS_INTEREST_ENTRY: number;

    @Column({ nullable: true })
    OTHER11_AMOUNT: string;

    @Column({ nullable: true })
    OTHER11_ACNO: string;

    @Column({ nullable: true })
    REC_PENAL_INT_GLACNO: string;

    @Column({ nullable: true })
    REC_PENAL_INT_AMOUNT: string;

    @Column({ nullable: true })
    TRAN_ENTRY_TYPE: string

    @Column({ nullable: true })
    DIVIDEND_YEAR: number

    @Column({ nullable: true })
    TRANSFER_BRANCH: number

    @Column({ nullable: true })
    DIV_PAID_YEARS: number

    @Column({ nullable: true })
    TRAN_PROCESS_YEAR: number

    @Column({ nullable: true })
    TRAN_PROCESS_MONTH: number

    @Column({ default: false })
    DIVIDEND_ENTRY: boolean



}