import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NPADATA {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    SERIAL_NO: number

    @Column({ nullable: true })
    REPORT_DATE: string

    @Column()
    AC_ACNOTYPE: string

    @Column()
    AC_TYPE: string

    @Column()
    AC_NO: string

    @Column()
    SECU_STATUS: string

    @Column({ nullable: true })
    AC_NPA_DATE: string

    @Column({ nullable: true })
    AC_OPDATE: string

    @Column({ nullable: true })
    AC_EXPIRE_DATE: string

    @Column({ nullable: true })
    AC_SANCTION_AMOUNT: string

    @Column({ nullable: true })
    AC_SECURITY_AMT: string

    @Column({ nullable: true })
    LEDGER_BALANCE: string

    @Column({ nullable: true })
    OVERDUE_AMOUNT: string

    @Column({ nullable: true })
    DUE_INSTALLMENT: string

    @Column({ nullable: true })
    NPA_PROVISION_AMT: string

    @Column({ nullable: true })
    RECEIVABLE_INTEREST: string

    @Column()
    NPA_CLASS: string

    @Column({ nullable: true })
    NPA_MONTHS: number

    @Column({ nullable: true })
    NPA_PERCENTAGE: string

    @Column({ nullable: true })
    NPA_DAYS: number

    @Column({ nullable: true })
    SUB_CLASS_NO: number

    @Column({ nullable: true })
    OVERDUE_DATE: string

    @Column({ nullable: true })
    TOBE_RECOVER_AMT: string

    @Column({ nullable: true })
    USER_CODE: string

    @Column({ nullable: true })
    UNSECURE_PROV_AMT: string

    @Column({ nullable: true })
    UNSECURE_PERCENTAGE: string

    @Column({ nullable: true })
    PROV_ON_AMT: string

    @Column({ nullable: true })
    OVERDUE_INTEREST: string

    @Column({ nullable: true })
    CURRENT_INTEREST: string

    @Column({ nullable: true })
    AC_INSTALLMENT: string

    @Column({ nullable: true })
    AMT_TOBE_RECOVER: string


}
