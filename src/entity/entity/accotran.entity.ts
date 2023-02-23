import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ACCOTRAN {
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

    @Column({ nullable: true })
    TRAN_AMOUNT: string;

    @Column({ nullable: true })
    TRAN_ACNOTYPE: string;

    @Column({ nullable: true })
    TRAN_ACTYPE: string;

    @Column({ nullable: true })
    TRAN_ACNO: number;

    @Column({ nullable: true })
    TRAN_CONTRA: string;

    @Column({ nullable: true })
    CHEQUE_DATE: string;

    @Column({ nullable: true })
    CHEQUE_SERIES: string;

    @Column({ nullable: true })
    CHEQUE_NO: string;

    @Column({ nullable: true })
    NARRATION: string;

    @Column({ nullable: true })
    CASHIER_CODE: string;

    @Column({ nullable: true })
    USER_CODE: string;

    @Column({ nullable: true })
    OFFICER_CODE: string;

    @Column({ nullable: true })
    CLOSING_ENTRY: string;

    @Column({ nullable: true })
    INTEREST_AMOUNT: string;

    @Column({ nullable: true })
    INTEREST_DATE: string;

    @Column({ nullable: true })
    TRAN_MODE: string;

    @Column({ nullable: true })
    WITHDRAW_NO: string;

    @Column({ nullable: true })
    TRAN_ENTRY_TYPE: string;

    @Column({ nullable: true })
    STATEMENT_DATE: string;

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
    OTHER11_AMOUNT: string




}