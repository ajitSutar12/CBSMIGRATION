import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IDMASTER } from './customer-id.entity';

@Entity()
export class TDSFORMSUBMIT {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    FIN_YEAR: string;

    @Column({ nullable: true })
    SUBMIT_DATE: string;

    @Column({ nullable: true })
    FORM_TYPE: string;

    @Column({ nullable: true })
    TDS_RATE: string;

    @Column({ nullable: true })
    TDS_LIMIT: string;

    @Column({ default: true })
    IS_EXEMPT_TDS: boolean

    @CreateDateColumn()
    SYSADD_DATETIME: Date;

    @Column({ nullable: true })
    SYSADD_LOGIN: string;

    @UpdateDateColumn()
    SYSCHNG_DATETIME: Date;

    @Column({ nullable: true })
    SYSCHNG_LOGIN: string;

    @Column({ nullable: true })
    idmasterID: number
    
    @OneToOne(() => IDMASTER, (idmaster) => idmaster.tdsForm, {
        cascade: true
    })
    @JoinColumn({ name: "idmasterID" })
    idmaster: IDMASTER[];

}