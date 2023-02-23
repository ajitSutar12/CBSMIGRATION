import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IDMASTER } from './customer-id.entity';
import { LNMASTER } from '../entity/term-loan-master.entity';

@Entity()
export class SECURITYDETAILS {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE:string

    @Column({ nullable: true })
    AC_TYPE:string

    @Column({ nullable: true })
    AC_NO:string

    @Column()
    @Generated('increment')
    SERIAL_NO: number

    @Column({ nullable: true })
    SECURITY_CODE: string

    @Column({ nullable: true })
    SECURITY_VALUE: string

    @Column()
    lnmasterID: number
    @ManyToOne(() => LNMASTER, (lnmaster) => lnmaster.securityMaster, {
        cascade: true
    })
    @JoinColumn({ name: "lnmasterID" })
    lnmaster: LNMASTER[];
}
