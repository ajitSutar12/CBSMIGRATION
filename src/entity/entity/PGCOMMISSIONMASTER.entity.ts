import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PGCOMMISSIONMASTER {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true })
    SR_NO: number

    @Column({ nullable: true })
    EFFECT_DATE: string

    @Column({ nullable: true })
    SLAB_TYPE: string

    @Column({ nullable: true })
    AMOUNT_FROM: string

    @Column({ nullable: true })
    AMOUNT_TO: string

    @Column({ nullable: true })
    PIGMY_COMMISSION_PERCENTAGE: string

    @Column({ nullable: true })
    COMM_AGAINST_LN_PERCENT: string

    @Column({ nullable: true })
    AC_ACNOTYPE: string

    @Column({ nullable: true })
    AC_TYPE: string

    @Column({ nullable: true })
    AC_NO: number

    @Column({ nullable: true })
    PG_AC_ACNOTYPE: string

    @Column({ nullable: true })
    PG_AC_TYPE: string

    @Column({ nullable: true })
    PIGMY_SVR_CHARGE_RATE: string




}
