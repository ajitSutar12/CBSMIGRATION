import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PERCENTAGEMASTER {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    REPORT_TYPE: string

    @Column()
    @Generated('increment')
    CODE: number

    @Column({ nullable: true })
    EFFECT_DATE: string

    @Column({ nullable: true })
    PERCENTAGE: number


}
