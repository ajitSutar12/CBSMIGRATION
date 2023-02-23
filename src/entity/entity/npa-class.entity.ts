import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NPAMASTER } from './npa-classification.entity'
@Entity()
export class NPACLASSIFICATION {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    SERIAL_NO: number

    @Column()
    NPA_CLASS: string

    @Column()
    SUB_CLASS_NO: number

    @Column({ nullable: true })
    NPA_DESCRIPTION: string

    @Column({ nullable: true })
    FROM_MONTHS: number

    @Column({ nullable: true })
    FROM_DAYS: number

    @Column({ nullable: true })
    TO_MONTHS: number

    @Column({ nullable: true })
    TO_DAYS: number

    @Column({ nullable: true })
    SECURED_PERCENT: string

    @Column({ nullable: true })
    UNSECURED_PERCENT: string

    @Column({ nullable: true })
    NPAClassID: number

    @ManyToOne(() => NPAMASTER, (NPA) => NPA.NPAClass, {
        cascade: true
    })
    @JoinColumn({ name: "NPAClassID" })
    NPA: NPAMASTER[];

}
