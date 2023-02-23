
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CRARMASTER {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('increment')
    CODE: number

    @Column({ nullable: true })
    NAME: string

    FIRST_SRNO: string

    @Column({ nullable: true })
    SECOND_SRNO: string

    @Column({ nullable: true })
    THIRD_SRNO: string

    @Column({ nullable: true })
    FOURTH_SRNO: string

    @Column({ nullable: true })
    PERCENTAGE: number

    @Column({ nullable: true })
    HEAD_TYPE: string

    @Column({ nullable: true })
    IS_INPUT: number

    @Column({ nullable: true })
    AMOUNT: number

}
