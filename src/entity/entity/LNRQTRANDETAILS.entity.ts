import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LNRQTRANDETAILS {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    TRAN_APPLI_NO: number

    @Column()
    TRAN_APPLI_DATE: string

    @Column()
    SERIAL_NO: number

    @Column({ nullable: true })
    TRAN_TIME: string

    @Column()
    TRAN_TYPE: string

    @Column()
    TRAN_MODE: string

    @Column({ nullable: true })
    TRAN_DRCR: string

    @Column()
    TRAN_ACNOTYPE: string

    @Column()
    TRAN_ACTYPE: string

    @Column()
    TRAN_ACNO: number

    @Column()
    TRAN_GLACNO: number

    @Column({ nullable: true })
    INTEREST_GLACNO: number

    @Column({ nullable: true })
    RECPAY_INT_GLACNO: number

    @Column({ nullable: true })
    CHEQUE_DATE: string

    @Column({ nullable: true })
    CHEQUE_NO: number

    @Column({ nullable: true })
    CHEQUE_ACNO: number

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    TRAN_AMOUNT: number

    @Column({ nullable: true })
    RECPAY_INT_AMOUNT: number

    @Column({ nullable: true })
    INTEREST_AMOUNT: number

    @Column({ nullable: true })
    PENAL_INT_GLACNO: number

    @Column({ nullable: true })
    PENAL_INT_AMOUNT: number

    @Column({ nullable: true })
    REC_PENAL_INT_GLACNO: number

    @Column({ nullable: true })
    REC_PENAL_INT_AMOUNT: number

    @Column({ nullable: true })
    INTEREST_DATE: string

    @Column({ nullable: true })
    SANCTION_AMOUNT: number

    @Column({ nullable: true })
    IS_INTEREST_ENTRY: number

    @Column({ nullable: true })
    AC_CLOSED: number

    @Column({ nullable: true })
    TRAN_SOURCE_TYPE: string

    @Column({ nullable: true })
    TRAN_SOURCE_NO: number

    @Column({ nullable: true })
    TRAN_ENTRY_TYPE: string

    @Column({ nullable: true })
    CLOSING_ENTRY: number

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    TRAN_APPLI_YEAR: string


}
