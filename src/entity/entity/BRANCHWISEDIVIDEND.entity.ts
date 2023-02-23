import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BRANCHWISEDIVIDEND {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    TRAN_DATE: string

    @Column({ nullable: true })
    BRANCH_CODE: number

    @Column({ nullable: true })
    AC_TYPE: string

    @Column({ nullable: true })
    AC_NO: number

    @Column({ nullable: true })
    AC_NAME: string

    @Column({ nullable: true })
    MEMB_ACTYPE: number

    @Column({ nullable: true })
    MEMB_NO: number

    @Column({ nullable: true })
    CURR_SHARE_BALANCE: number

    @Column({ nullable: true })
    KAYAM_DEP_BALANCE: number

    @Column({ nullable: true })
    PRASANGIK_LN_BALANCE: number

    @Column({ nullable: true })
    MEDIUM_LN_BALANCE: number

    @Column({ nullable: true })
    VISHES_LN_BALANCE: number

    @Column({ nullable: true })
    COMPUTER_LN_BALANCE: number

    @Column({ nullable: true })
    KALYAN_NIDI_BALANCE: number

    @Column({ nullable: true })
    AC_SALARYDIVISION_CODE: number

    @Column({ nullable: true })
    SALARYDIVISION_NAME: string

    @Column({ nullable: true })
    AC_ACNOTYPE: string

    @ManyToOne(() => OWNBRANCHMASTER, (branchDividend) => branchDividend.branchDividend, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    branchDividend: OWNBRANCHMASTER[];

}
