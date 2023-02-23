import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MONTHLYRECOVERYDDDETAILS {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    PROCESS_YEAR: number

    @Column()
    PROCESS_MONTH: number

    @Column()
    AC_SALARYDIVISION: number

    @Column({ nullable: true })
    CHEQUE_NO: string

    @Column({ nullable: true })
    CHEQUE_DATE: string

    @Column({ nullable: true })
    OW_NO: string

    @Column({ nullable: true })
    OW_DATE: string

    @Column({ nullable: true })
    BANK_NAME: string

    @Column({ nullable: true })
    COMM_AMT: number


}
