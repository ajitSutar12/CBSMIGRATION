import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DIVIDEND {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    WARRENT_DATE: string

    @Column({ nullable: true })
    WARRENT_NO: number

    @Column({ nullable: true })
    DIV_FROM_YEAR: number

    @Column({ nullable: true })
    DIV_TO_YEAR: number

    @Column({ nullable: true })
    DIV_FROM_MONTH: number

    @Column({ nullable: true })
    DIV_TO_MONTH: number

    @Column()
    ACNOTYPE: string

    @Column({ nullable: true })
    ACTYPE: string

    @Column({ nullable: true })
    AC_NO: number

    @Column({ nullable: true })
    TOTAL_SHARES: number

    @Column({ nullable: true })
    TOTAL_SHARES_AMOUNT: number

    @Column({ nullable: true })
    DIVIDEND_AMOUNT: string

    @Column({nullable:true})
    DIVIDEND_STATUS: number

    @Column({ nullable: true })
    DIV_PAID_DATE: string

    @Column({ nullable: true })
    DIV_TRANSFER_DATE: string

    @Column({ nullable: true })
    DIV_TRANSFER_BRANCH: number

    @Column({ nullable: true })
    DIV_TRANSFER_ACNOTYPE: string

    @Column({ nullable: true })
    DIV_TRANSFER_ACTYPE: string

    @Column({ nullable: true })
    DIV_TRANSFER_ACNO: number

    @Column({ nullable: true })
    MEMBER_CLOSE_DATE: string

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    BONUS_AMOUNT: number


}
