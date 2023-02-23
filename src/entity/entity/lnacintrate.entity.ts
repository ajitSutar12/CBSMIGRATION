import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LNMASTER } from './term-loan-master.entity';

@Entity()
export class LNACINTRATE {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    AC_ACNOTYPE: string

    @Column({ type: 'date' })
    EFFECT_DATE: string

    @Column()
    AC_TYPE: number

    @Column()
    AC_NO: number

    @Column()
    BANKACNO: string

    @Column()
    BRANCH_CODE: number;

    @Column({ default: 1 })
    OPENING_ENTRY: number

    @Column({ default: 1 })
    SERIAL_NO: number

    @Column()
    INT_RATE: string

    @Column({ default: 0 })
    PENAL_INT_RATE: string

    @Column({ default: 1 })
    UPDATEFLAG: Number

    @Column()
    LNMASTERID: number

    @ManyToOne(() => LNMASTER, (termLoan) => termLoan.termLoan, {
        cascade: true
    })
    @JoinColumn({ name: "LNMASTERID" })
    termLoan: LNMASTER[];
}
