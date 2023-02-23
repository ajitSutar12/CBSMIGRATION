import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PASSBOOKHISTORY {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ nullable: true })
    AC_ACNOTYPE: string

    @Column({ nullable: true })
    AC_TYPE: string

    @Column({ nullable: true })
    AC_NO: number

    @Column({ nullable: true })
    LAST_PRINT_DATE: string

    @Column({ nullable: true })
    LAST_PRINT_TRANNO: number




}
