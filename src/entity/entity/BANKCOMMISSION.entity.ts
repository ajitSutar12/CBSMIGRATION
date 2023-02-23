import { BANKMASTER } from 'src/entity/entity/bank-master.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BANKCOMMISSION {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    BANK_CODE: number

    @Column({ nullable: true })
    EFFECTIVE_DATE: string

    @Column({ nullable: true })
    FROM_AMOUNT: number

    @Column({ nullable: true })
    TO_AMOUNT: number

    @Column({ nullable: true })
    RATE: number

    @Column({ nullable: true })
    RATE_PER_UNIT: number

    @Column({ nullable: true })
    MIN_COMMISSION: number

    @Column({ nullable: true })
    MAX_COMMISSION: number

    @ManyToOne(() => BANKMASTER, (bankComm) => bankComm.bankComm, {
        cascade: true
    })
    @JoinColumn({ name: "BANK_CODE" })
    bankComm: BANKMASTER[];

}
