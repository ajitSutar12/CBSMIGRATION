
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class COMPANYGROUPLINK {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    COMP_CODE: number

    @Column()
    SERIAL_NO: number

    @Column()
    AC_ACNOTYPE: string

    @Column()
    AC_TYPE: string

    @Column()
    AC_NO: number

    @Column({ nullable: true })
    DEFAULT_AMOUNT: number


}
