import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class CHARGESNOTING {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_DATE: string

    @Column()
    TRAN_ACNOTYPE: string

    @Column()
    TRAN_ACTYPE: number

    @Column()
    TRAN_ACNO: string

    @Column({ nullable: true })
    TRAN_DRCR: string

    @Column({ nullable: true })
    AMOUNT_TYPE: string

    @Column({ nullable: true })
    TRAN_AMOUNT: number

    @Column({ nullable: true })
    OTHER1_AMOUNT: number

    @Column({ nullable: true })
    OTHER2_AMOUNT: number

    @Column({ nullable: true })
    OTHER3_AMOUNT: number

    @Column({ nullable: true })
    OTHER4_AMOUNT: number

    @Column({ nullable: true })
    OTHER5_AMOUNT: number

    @Column({ nullable: true })
    OTHER6_AMOUNT: number

    @Column({ nullable: true })
    OTHER7_AMOUNT: number

    @Column({ nullable: true })
    OTHER8_AMOUNT: number

    @Column({ nullable: true })
    OTHER9_AMOUNT: number

    @Column({ nullable: true })
    OTHER10_AMOUNT: number

    // @Column({ nullable: true })
    // TRAN_STATUS: string

    @Column({ nullable: true })
    NARRATION: string

    @Column({ nullable: true })
    GL_ENTRY: string

    @Column({ nullable: true })
    TRAN_GLACNO: number

    @Column({ nullable: true })
    BRANCH_CODE: number

    @CreateDateColumn()
    SYSADD_DATETIME: Date;

    @Column({ nullable: true })
    SYSADD_LOGIN: string;

    @UpdateDateColumn()
    SYSCHNG_DATETIME: Date;

    @Column({ nullable: true })
    SYSCHNG_LOGIN: string;

    @ManyToOne(() => SCHEMAST, (chargesScheme) => chargesScheme.chargesScheme, {
        cascade: true
    })
    @JoinColumn({ name: "TRAN_ACTYPE" })
    chargesScheme: SCHEMAST[];


    @ManyToOne(() => OWNBRANCHMASTER, (notingChargeBranch) => notingChargeBranch.notingChargeBranch, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    notingChargeBranch: OWNBRANCHMASTER[];

}
