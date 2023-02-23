import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LOANTRAN {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_NO: number;

    @Column()
    SERIAL_NO: number;

    @Column()
    BRANCH_CODE: number;

    @Column()
    TRAN_DATE: string;

    @Column()
    TRAN_TIME: string;

    @Column()
    TRAN_TYPE: string;

    @Column()
    TRAN_DRCR: string;

    @Column()
    TRAN_ACNOTYPE: string;

    @Column()
    TRAN_ACTYPE: string;

    @Column()
    TRAN_ACNO: string;

    @Column({nullable:true})
    TRAN_AMOUNT: string;

    @Column({ nullable: true })
    TRAN_GLACNO: string;

    @Column({ nullable: true })
    TRAN_SOURCE_TYPE: string

    @Column({ nullable: true })
    CHEQUE_DATE: string;

    @Column({ nullable: true })
    CHEQUE_SERIES: string;

    @Column({ nullable: true })
    CHEQUE_NO: string;

    @Column({ nullable: true })
    NARRATION: string;

    @Column({ nullable: true })
    PASSBOOK_PRINTED: string;

    @Column({ nullable: true })
    USER_CODE: string;

    @Column({ nullable: true })
    OFFICER_CODE: string;

    @Column({ nullable: true })
    CASHIER_CODE: string;

    @Column({ nullable: true })
    NORMAL_INTEREST: string;

    @Column({ nullable: true })
    INTEREST_DATE: string;

    @Column({ nullable: true })
    PENAL_INTEREST: string;

    @Column({ nullable: true })
    RECPAY_INT_AMOUNT: number;

    @Column({ nullable: true })
    INTEREST_GLACNO: string;

    @Column({ nullable: true })
    INTEREST_AMOUNT: string;

    @Column({ nullable: true })
    OTHER1_AMOUNT: number;

    @Column({ nullable: true })
    OTHER2_AMOUNT: number;

    @Column({ nullable: true })
    OTHER3_AMOUNT: number;

    @Column({ nullable: true })
    OTHER4_AMOUNT: number;

    @Column({ nullable: true })
    OTHER5_AMOUNT: number;

    @Column({ nullable: true })
    OTHER6_AMOUNT: number;

    @Column({ nullable: true })
    OTHER7_AMOUNT: number;

    @Column({ nullable: true })
    OTHER8_AMOUNT: number;

    @Column({ nullable: true })
    OTHER9_AMOUNT: number;

    @Column({ nullable: true })
    OTHER10_AMOUNT: number;

    @Column({ nullable: true })
    TRAN_MODE: string;

    @Column({ nullable: true })
    IS_INTEREST_ENTRY: string;

    @Column({ nullable: true })
    WITHDRAW_NO: string;

    @Column({ nullable: true })
    ADDED_PENAL_INTEREST: string;

    @Column({ nullable: true })
    TRAN_ENTRY_TYPE: string;

    @Column({ nullable: true })
    TRAN_PROCESS_YEAR: string;

    @Column({ nullable: true })
    TRAN_PROCESS_MONTH: string;

    @Column({ nullable: true })
    REC_PENAL_INT_AMOUNT: string;

    @Column({ nullable: true })
    OTHER11_AMOUNT: number;
}