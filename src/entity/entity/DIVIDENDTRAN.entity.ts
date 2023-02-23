import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DIVIDENDTRAN {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    TRAN_DATE: string

    @Column()
    TRAN_ACNOTYPE: string

    @Column()
    TRAN_ACTYPE: string

    @Column()
    TRAN_ACNO: number

    @Column({ nullable: true })
    DIVIDEND_AMOUNT: number

    @Column({ nullable: true })
    KAYAM_INTEREST: number

    @Column({ nullable: true })
    MASHIK_DEPOSIT: number

    @Column({ nullable: true })
    MASHIK_INTEREST: number

    @Column({ nullable: true })
    SEVAK_DED_AMT: number

    @Column({ nullable: true })
    JUSEVAK_DED_AMT: number

    @Column({ nullable: true })
    BANK_ACNO: number

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    AC_SALARYDIV: number

    @Column({ nullable: true })
    SUB_SALARYDIV: number

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    POST_TO_AC: number


}
