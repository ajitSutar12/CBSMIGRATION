import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CDRATIO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('increment')
    CODE: number

    @Column({ nullable: true })
    STATUS_DP: string

    @Column({ nullable: true })
    STATUS_LN: string

    @Column({ nullable: true })
    STATUS_A: string

    @Column({ nullable: true })
    STATUS_B: string


}
