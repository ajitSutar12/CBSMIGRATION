import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
@Entity()
export class HISTORYTRAN {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_NO: number

    @Column()
    SERIAL_NO: number

    @Column()
    TRAN_DATE: string

    @Column({ nullable: true })
    TRAN_TIME: string

    @Column()
    TRAN_TYPE: string

    @Column()
    TRAN_MODE: string

    @Column({ nullable: true })
    TRAN_DRCR: string

    @Column()
    BRANCH_CODE: number

    @Column()
    TRAN_ACNOTYPE: string

    @Column({ nullable: true })
    TRAN_ACTYPE: string

    @Column({ nullable: true })
    TRAN_ACNO: string

    @Column({ nullable: true })
    TRAN_GLACNO: string

    @Column({ nullable: true })
    AGENT_ACNOTYPE: string

    @Column({ nullable: true })
    AGENT_ACTYPE: number

    @Column({ nullable: true })
    AGENT_ACNO: string

    @Column({ nullable: true })
    INTEREST_GLACNO: string

    @Column({ nullable: true })
    RECPAY_INT_GLACNO: number

    @Column({ nullable: true })
    DD_COMMISSION_ACNO: number

    @Column({ nullable: true })
    CHEQUE_DATE: string

    @Column({ nullable: true })
    CHEQUE_SERIES: string

    @Column({ nullable: true })
    CHEQUE_NO: string

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    TOKEN_NO: number

    @Column({ nullable: true })
    DD_PREPARED: number

    @Column({ nullable: true })
    DIVIDEND_YEAR: number

    @Column({ default: false })
    DIVIDEND_ENTRY: boolean

    @Column({ nullable: true })
    NO_OF_SHARES: number

    @Column({ nullable: true })
    TRAN_AMOUNT: string

    @Column({ nullable: true })
    RECPAY_INT_AMOUNT: string

    @Column({ nullable: true })
    INTEREST_AMOUNT: string

    @Column({ nullable: true })
    DD_COMMISSION_AMT: string

    @Column({ nullable: true })
    INTEREST_DATE: string

    @Column({ nullable: true })
    PENAL_INTEREST: string

    @Column({ nullable: true })
    OTHER1_ACNO: string

    @Column({ nullable: true })
    OTHER2_ACNO: string

    @Column({ nullable: true })
    OTHER3_ACNO: string

    @Column({ nullable: true })
    OTHER4_ACNO: string

    @Column({ nullable: true })
    OTHER5_ACNO: string

    @Column({ nullable: true })
    OTHER6_ACNO: string

    @Column({ nullable: true })
    OTHER7_ACNO: string

    @Column({ nullable: true })
    OTHER8_ACNO: string

    @Column({ nullable: true })
    OTHER9_ACNO: string

    @Column({ nullable: true })
    OTHER10_ACNO: string

    @Column({ nullable: true })
    OTHER1_AMOUNT: string

    @Column({ nullable: true })
    OTHER2_AMOUNT: string

    @Column({ nullable: true })
    OTHER3_AMOUNT: string

    @Column({ nullable: true })
    OTHER4_AMOUNT: string

    @Column({ nullable: true })
    OTHER5_AMOUNT: string

    @Column({ nullable: true })
    OTHER6_AMOUNT: string

    @Column({ nullable: true })
    OTHER7_AMOUNT: string

    @Column({ nullable: true })
    OTHER8_AMOUNT: string

    @Column({ nullable: true })
    OTHER9_AMOUNT: string

    @Column({ nullable: true })
    OTHER10_AMOUNT: string

    @Column({ nullable: true })
    PASSBOOK_PRINTED: number

    @Column({ nullable: true })
    AC_CLOSED: string

    @Column({ nullable: true })
    CASHIER_CODE: string

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    WITHDRAW_NO: string

    @Column({ nullable: true })
    IS_INTEREST_ENTRY: number

    @Column({ nullable: true })
    PENAL_INT_GLACNO: number

    @Column({ nullable: true })
    PENAL_INT_AMOUNT: string

    @Column({ nullable: true })
    EXP_AMOUNT_FROM_PREPARATION: number

    @Column({ nullable: true })
    TRAN_SOURCE_TYPE: string

    @Column({ nullable: true })
    TRAN_SOURCE_NO: number

    @Column({ nullable: true })
    CASH_REMITANCE_STATUS: string

    @Column({ nullable: true })
    CASH_SEND_WITH_PERSON: string

    @Column({ nullable: true })
    DENO_TRAN_NO: number

    @Column({ nullable: true })
    TRAN_ENTRY_TYPE: string

    @Column({ nullable: true })
    CLOSING_ENTRY: number

    @Column({ nullable: true })
    HO_SUB_GLACNO: number

    @Column({ nullable: true })
    TRAN_PROCESS_MONTH: number

    @Column({ nullable: true })
    TRAN_PROCESS_YEAR: number

    @Column({ nullable: true })
    IS_DDPAYORDER_ENTRY: number

    @Column({ nullable: true })
    REC_PENAL_INT_GLACNO: string

    @Column({ nullable: true })
    REC_PENAL_INT_AMOUNT: string

    @Column({ nullable: true })
    DIV_PAID_YEARS: number

    @Column({ nullable: true })
    OD_INT_DATE: string

    @Column({ nullable: true })
    TRANSFER_BRANCH: number

    @Column({ nullable: true })
    IS_DORMANT: number

    @Column({ nullable: true })
    NARR_TYPE: string

    @Column({ nullable: true })
    OTHER11_AMOUNT: string

    @Column({ nullable: true })
    OTHER11_ACNO: string

    @Column({ nullable: true })
    SANCTIONED_CASH_LIMIT: number

    @ManyToOne(() => SCHEMAST, (HistoryTranType) => HistoryTranType.historyTran, {
        cascade: true
    })
    @JoinColumn({ name: "TRAN_ACTYPE" })
    HistoryTranType: SCHEMAST[];

    @ManyToOne(() => SCHEMAST, (HistoryTran) => HistoryTran.historyTran, {
        cascade: true
    })
    @JoinColumn({ name: "AGENT_ACTYPE" })
    HistoryTran: SCHEMAST[];


}
