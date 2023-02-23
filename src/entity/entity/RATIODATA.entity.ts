import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RATIODATA {

    @PrimaryGeneratedColumn()
    id: number;




    @Column({ nullable: true })
    SERIAL_NO: number

    @Column()
    @Generated('increment')
    CODE: number

    @Column({ nullable: true })
    RATIO_NAME: string

    @Column({ nullable: true })
    AMOUNT1: number

    @Column({ nullable: true })
    AMOUNT2: number

    @Column({ nullable: true })
    IS_PERCENTAGE: number



}
