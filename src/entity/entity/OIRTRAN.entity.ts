import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OIRTRAN {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    TRAN_DATE: string

    @Column()
    SERIAL_NO: number

    @Column({ nullable: true })
    TRAN_DRCR: string

    @Column()
    TRAN_ACNOTYPE: string

    @Column()
    TRAN_ACTYPE: string

    @Column()
    TRAN_ACNO: string

    @Column()
    TRAN_GLACNO: number

    @Column()
    TRAN_MODE: string

    @Column()
    OIR_AMOUNT: number

    @Column()
    OVERDUE_AMOUNT: number

    @Column()
    DUE_INSTALLMENT: number

    @Column({ nullable: true })
    NPA_DATE: string

    @Column({ nullable: true })
    TRAN_STATUS: string

    @Column({ nullable: true })
    USER_CODE: string


}
