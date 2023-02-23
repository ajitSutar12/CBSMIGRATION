import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TDSTRAN {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_DATE: string

    @Column()
    SERIAL_NO: number

    @Column()
    FIN_YEAR: number

    @Column()
    AC_CUSTID: number

    @Column()
    AC_ACNOTYPE: string

    @Column()
    AC_TYPE: number

    @Column()
    AC_NO: string

    @Column({ nullable: true })
    BRANCH_CODE: number

    @Column({ nullable: true })
    LAST_TDS_DATE: string

    @Column({ nullable: true })
    INTEREST_AMOUNT: number

    @Column({ nullable: true })
    TDS_AMOUNT: number

    @Column({ nullable: true })
    TDS_RATE: number

    @Column({ nullable: true })
    IS_TDS_DEDUCTED: number

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    FINANCIAL_INTEREST: number

}
