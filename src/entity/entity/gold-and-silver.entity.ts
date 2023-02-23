import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GOLDSILVER {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string;

    @Column({ nullable: true })
    AC_TYPE: number;
    @ManyToOne(() => SCHEMAST, (goldsilver) => goldsilver.goldsilver, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })

    goldsilver: SCHEMAST[];

    @Column({ nullable: true, default: 0 })
    AC_NO: string;

    @Column({ nullable: true })
    SECU_CODE: number;
    @ManyToOne(() => SECURITYMASTER, (silvergold) => silvergold.silvergold, {
        cascade: true
    })
    @JoinColumn({ name: "SECU_CODE" })
    silvergold: SECURITYMASTER[];

    @Column({ nullable: true })
    SUBMISSION_DATE: string;

    @Column({ nullable: true })
    ARTICLE_NAME: string;

    @Column({ nullable: true })
    BAG_RECEIPT_NO: string;

    @Column({ nullable: true })
    TOTAL_VALUE: string;

    @Column({ nullable: true })
    NOMINEE: string;

    @Column({ nullable: true })
    NOMINEE_RELATION: string;

    @Column({ nullable: true })
    RETURN_DATE: string;

    @Column({ nullable: true })
    TRAN_STATUS: string;

    @Column({ nullable: true })
    USER_CODE: string;

    @Column({ nullable: true })
    OFFICER_CODE: string;

    @Column({ nullable: true })
    ITEM_TYPE: string;

    @Column({ nullable: true })
    TOTAL_WEIGHT_GMS: string;

    @Column({ nullable: true })
    CLEAR_WEIGHT_GMS: string;

    @Column({ nullable: true })
    RATE: string;

    @Column({ nullable: true })
    GOLD_BOX_NO: string;

    @Column({ nullable: true })
    MARGIN: string;

    @Column({ nullable: true })
    REMARK: string;

    @Column({ nullable: true })
    SECURITY_TYPE: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;
    @ManyToOne(() => OWNBRANCHMASTER, (goldsilverbranchcode) => goldsilverbranchcode.goldsilverbranchcode, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    goldsilverbranchcode: OWNBRANCHMASTER[];

}