import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CHEQUEOUTSIDETRAN {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_NO: number

    @Column()
    TRAN_YEAR: string

    @Column()
    BRANCH_CODE: number

    @Column()
    TRAN_DATE: string

    @Column()
    TRAN_TIME: string

    @Column({ nullable: true })
    TRAN_TYPE: string

    @Column({ nullable: true })
    TRAN_DRCR: string

    @Column({ nullable: true })
    TRAN_ACNOTYPE: string

    @Column({ nullable: true })
    TRAN_ACTYPE: string

    @Column({ nullable: true })
    TRAN_ACNO: number

    @Column({ nullable: true })
    TRAN_AMOUNT: number

    @Column()
    TRAN_GLACNO: number
    CHEQUE_NO: number

    @Column()
    CHEQUE_DATE: string

    @Column()
    CLEARING_DAYS: number

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    COLLECTION_STATUS: string

    @Column({ nullable: true })
    COLLECTION_DATE: string

    @Column()
    BANK_CODE: number

    @Column()
    BANK_BRANCH_NAME: string

    @Column()
    CASHIER_CODE: string

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    BANK_BRANCH_ADDRESS: string

    @Column({ nullable: true })
    BILL_DISCOUNT_AMOUNT: number

    @Column({ nullable: true })
    BILL_DISCOUNT_DATE: string

    @Column({ nullable: true })
    BILL_COMMISSION_AMOUNT: number

    @Column({ nullable: true })
    BILL_USER_CODE: string

    @Column({ nullable: true })
    BILL_OFFICER_CODE: string

    @Column({ nullable: true })
    BILL_TRAN_STATUS: string

    @Column()
    ENTRY_DATE: string

    @Column({ nullable: true })
    HO_SUB_GLACNO: number

    @Column({ nullable: true })
    COLLECTION_CHARGES: number

    @Column({ nullable: true })
    RECEIVED_AMOUNT: number

    @Column({ nullable: true })
    RETURN_CODE: number

    @Column({ nullable: true })
    DRAWEE_BANK: string

    @Column({ nullable: true })
    BANK_NAME: string

    @Column({ nullable: true })
    TRAN_CODE: number



}
