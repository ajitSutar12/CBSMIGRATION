
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class COMMISSIONSLAB {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    INSTRUMENT_TYPE: string

    @Column({ nullable: true })
    EFFECTIVE_DATE: string

    @Column({ nullable: true })
    FROM_AMOUNT: string

    @Column({ nullable: true })
    TO_AMOUNT: string

    @Column({ nullable: true })
    RATE: string

    @Column({ nullable: true })
    RATE_PER_UNIT: string

    @Column({ nullable: true })
    MIN_COMMISSION: string

    @Column({ nullable: true })
    MAX_COMMISSION: string


}
