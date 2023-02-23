import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GOLDSILVEROPBAL {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    BRANCH_CODE: number

    @Column({ nullable: true })
    ITEM_CODE: string

    @Column({ nullable: true })
    GROSS_WT: number

    @Column({ nullable: true })
    CLEAR_WT: number

    @Column({ nullable: true })
    NO_OF_ITEMS: number

    @Column({ nullable: true })
    BAL_DATE: string

    @Column({ nullable: true })
    OP_BALANCE: number

}
