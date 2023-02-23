import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RECOVERY_DIFF {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true })
    MEMBER_NO: number

    @Column({ nullable: true })
    AC_NAME: string

    @Column({ nullable: true })
    AC_TYPE: string

    @Column({ nullable: true })
    AC_NO: number

    @Column({ nullable: true })
    AMOUNT: number

    @Column({ nullable: true })
    BALANCE: number

    @Column({ nullable: true })
    REASON: string

    @Column({ nullable: true })
    SALNAME: string




}
