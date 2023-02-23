import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SYSPARA } from 'src/entity/entity/system-master-parameters.entity';

@Entity()
export class SHARECAPITALAMTDETAILS {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    FROM_DATE: string

    @Column()
    TO_DATE: string

    @Column()
    AMOUNT: number

    @Column()
    SYSID: number

    @ManyToOne(() => SYSPARA, (SYSPARAID) => SYSPARAID.SYSPARAID, {
        cascade: true
    })
    @JoinColumn({ name: "SYSID" })
    SYSPARAID: SYSPARA[];

}
