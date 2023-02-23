import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BUDGETMASTER {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    FIN_YEAR: string

    @Column()
    AC_NO: number

    @Column()
    BUDGET_AMOUNT: number

    @Column()
    USER_CODE: string

}
