import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LANDBUILDING {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string;

    @Column({ nullable: true })
    AC_TYPE: number;
    @ManyToOne(() => SCHEMAST, (land) => land.land, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })

    land: SCHEMAST[];

    @Column({ nullable: true, default: 0 })
    AC_NO: string;

    @Column({ nullable: true })
    SECU_CODE: number;
    @ManyToOne(() => SECURITYMASTER, (landbuilding) => landbuilding.landbuilding, {
        cascade: true
    })
    @JoinColumn({ name: "SECU_CODE" })
    landbuilding: SECURITYMASTER[];

    @Column({ nullable: true })
    SUBMISSION_DATE: string;

    @Column({ nullable: true })
    VALUE: string;

    @Column({ nullable: true })
    LOCATION: string;

    @Column({ nullable: true })
    AREA: string

    @Column({ nullable: true })
    UNIT_AREA: string

    @Column({ nullable: true })
    AQUISITION_DATE: string;

    @Column({ nullable: true })
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
    CITY_SURVEY_NO: string;

    @Column({ nullable: true })
    CITY_SURVEY_DATE: string;

    @Column({ nullable: true })
    REG_NO: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;
    @ManyToOne(() => OWNBRANCHMASTER, (landbranchcode) => landbranchcode.landbranchcode, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    landbranchcode: OWNBRANCHMASTER[];
}