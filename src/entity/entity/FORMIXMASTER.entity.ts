import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FORMIXMASTER {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    REPORT_TYPE: string

    @Column({ nullable: true })
    TRAN_DATE: string

    @Column({ nullable: true })
    OVERDUE_AMOUNT: number

    @Column({ nullable: true })
    PRIORITY_AMOUNT: number

}
