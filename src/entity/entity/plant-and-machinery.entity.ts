import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PLANTMACHINARY {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string;

    @Column({ nullable: true })
    AC_TYPE: number;
    @ManyToOne(() => SCHEMAST, (plantmachinary) => plantmachinary.plantmachinary, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })

    plantmachinary: SCHEMAST[];

    @Column({ nullable: true, default: 0 })
    AC_NO: string;

    @Column({ nullable: true })
    SECU_CODE: number;
    @ManyToOne(() => SECURITYMASTER, (plant) => plant.plant, {
        cascade: true
    })
    @JoinColumn({ name: "SECU_CODE" })
    plant: SECURITYMASTER[];

    @Column({ nullable: true })
    SUBMISSION_DATE: string;

    @Column({ nullable: true })
    MACHINE_NAME: string;

    @Column({ nullable: true })
    MACHINE_TYPE: string;

    @Column({ nullable: true })
    DISTINCTIVE_NO: string;

    @Column({ nullable: true })
    SPECIFICATION: string;

    @Column({ nullable: true })
    AQUISITION_DATE: string;

    @Column({ nullable: true, default: 0 })
    NEW_EQUIPEMENT: string;

    @Column({ nullable: true })
    SUPPLIER_NAME: string;

    @Column({ nullable: true })
    PURCHASE_PRICE: string;

    @Column({ nullable: true })
    MARGIN: string;

    @Column({ nullable: true })
    REMARK: string;

    @Column({ nullable: true })
    SECURITY_TYPE: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;
    @ManyToOne(() => OWNBRANCHMASTER, (plantbranchcode) => plantbranchcode.plantbranchcode, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    plantbranchcode: OWNBRANCHMASTER[];
}