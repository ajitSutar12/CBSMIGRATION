import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class STANDINSTRUCTIONLOG {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_DATE: string

    @Column({ nullable: true })
    TRAN_TIME: string

    @Column({ nullable: true })
    INSTRUCTION_NO: number

    @Column({ nullable: true })
    SUCCESS_STATUS: string

    @Column({ nullable: true })
    DAILYTRAN_TRAN_NO: number

    @Column()
    EXPECTED_EXECUTION_DATE: string

    @Column({ nullable: true })
    PARTICULARS: string

    @Column({ nullable: true })
    OVERDUE_INT: number

    @Column({ nullable: true })
    RECPAY_INT_AMOUNT: number

    @Column({ nullable: true })
    INTEREST_AMOUNT: number

    @Column({ nullable: true })
    TRAN_AMOUNT: number

    @Column({ nullable: true })
    PAYINT_AMOUNT: number

    @Column({ nullable: true })
    OTHER9_AMOUNT: number

    @Column({ nullable: true })
    PENAL_INT_AMOUNT: number

}
