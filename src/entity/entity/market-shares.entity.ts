import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MARKETSHARE {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_ACNOTYPE: string;

    @Column({ nullable: true })
    AC_TYPE: number;
    @ManyToOne(() => SCHEMAST, (marketshare) => marketshare.marketshare, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })

    marketshare: SCHEMAST[];

    @Column({ nullable: true, default: 0 })
    AC_NO: string;

    @Column({ nullable: true })
    SECU_CODE: number;
    @ManyToOne(() => SECURITYMASTER, (share) => share.share, {
        cascade: true
    })
    @JoinColumn({ name: "SECU_CODE" })
    share: SECURITYMASTER[];

    @Column({ nullable: true })
    CO_CODE: string;

    @Column({ nullable: true })
    CO_NAME: string;

    @Column({ nullable: true })
    MARKET_VALUE: string;

    @Column({ nullable: true })
    SHARES: string;

    @Column({ nullable: true })
    MARGIN: string;

    @Column({ nullable: true })
    SUBMISSION_DATE: string;

    @Column({ nullable: true })
    UPDATED_BY: string;

    @Column({ nullable: true })
    RELEASE_DATE: string;

    @Column({ nullable: true })
    RELEASE_BY: string;

    @Column({ nullable: true })
    SECURITY_TYPE: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;
    @ManyToOne(() => OWNBRANCHMASTER, (marketbranchcode) => marketbranchcode.marketbranchcode, {
        cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    marketbranchcode: OWNBRANCHMASTER[];
}