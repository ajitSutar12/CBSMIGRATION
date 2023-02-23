import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RECOTRAN {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true })
    SERIAL_NO: number

    @Column()
    BRANCH_CODE: number

    @Column()
    TRAN_DATE: string

    @Column()
    TRAN_TIME: string

    @Column()
    TRAN_TYPE: string

    @Column({ nullable: true })
    TRAN_DRCR: string

    @Column()
    TRAN_AMOUNT: string

    @Column({ nullable: true })
    TRAN_ACNOTYPE: string

    @Column({ nullable: true })
    TRAN_ACTYPE: string

    @Column({ nullable: true })
    TRAN_ACNO: string

    @Column({ nullable: true })
    CHEQUE_NO: number

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    STATEMENT_DATE: string

    @Column()
    USER_CODE: string

    @Column({ nullable: true })
    OFFICER_CODE: string

    @Column({ nullable: true })
    TRAN_ENTRY_TYPE: string



}
