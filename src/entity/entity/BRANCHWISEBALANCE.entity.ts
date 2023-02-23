import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BRANCHWISEBALANCE {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    TRAN_DATE: string

    @Column({ nullable: true })
    BRANCH_CODE: number

    @Column()
    AC_TYPE: string

    @Column({ nullable: true })
    AC_NO: number

    @Column({ nullable: true })
    AC_NAME: string

    @Column()
    MEMB_ACTYPE: string

    @Column({ nullable: true })
    MEMB_NO: number

    @Column({ nullable: true })
    BALANCE: number

    @Column({ nullable: true })
    AC_SALARYDIVISION_CODE: number

    @Column({ nullable: true })
    SALARYDIVISION_NAME: string

    @Column({ nullable: true })
    AC_ACNOTYPE: string

}
