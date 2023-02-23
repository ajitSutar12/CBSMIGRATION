import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class INTHISTORYTRAN {

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

    @Column()
    TRAN_ACTYPE: string

    @Column()
    TRAN_ACNO: string

    @Column()
    TRAN_GLACNO: number

    @Column({ nullable: true })
    INTEREST_GLACNO: number

    @Column({ nullable: true })
    RECPAY_INT_GLACNO: number

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    TRAN_AMOUNT: number

    @Column({ nullable: true })
    RECPAY_INT_AMOUNT: number

    @Column({ nullable: true })
    INTEREST_DATE: string

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    INTEREST_AMOUNT: number

    @Column({ nullable: true })
    PENAL_INT_GLACNO: number

    @Column({ nullable: true })
    PENAL_INT_AMOUNT: number

    @Column({ nullable: true })
    LAST_INTEREST_DATE: string

    @Column({ nullable: true })
    INTEREST_RATE: number

    @Column({ nullable: true })
    TD_SCHEME_AMOUNT: number

    @Column({ nullable: true })
    LEDGER_BALANCE: number

    @Column({ nullable: true })
    TOTAL_PRODUCTS: number

    @Column({ nullable: true })
    AC_OPEN_DATE: string

    @Column({ nullable: true })
    EXPIRY_DATE: string

    @Column({ nullable: true })
    MONTHS: number

    @Column({ nullable: true })
    DAYS: number

    @Column({ nullable: true })
    POST_TO_INDIVIDUAL_AC: number

    @Column({ nullable: true })
    DAILYTRAN_POST_NO: number

    @Column({ nullable: true })
    POST_PENALINT_IN_INTEREST: number

    @Column({ nullable: true })
    ODUE_INT_GLACNO: number

    @Column({ nullable: true })
    ODUE_INT_AMOUNT: number

    @Column({ nullable: true })
    IS_POST_PENAL_TO_AC: number

    @Column({ nullable: true })
    RECPAY_INT_OPENING: number

    @Column({ nullable: true })
    ODUE_INT_OPENING: number

    @Column({ nullable: true })
    OD_INT_AMOUNT: number

    @Column({ nullable: true })
    REC_PENAL_INT_AMOUNT: number

    @Column({ nullable: true })
    REC_PENAL_INT_GLACNO: number

    @Column({ nullable: true })
    RECPENAL_INT_OPENING: number
}
