import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FRIDAYLIQUIDITYMASTER {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    CODE: string

    @Column()
    NAME: string

    @Column({ nullable: true })
    FSRNO: string

    @Column({ nullable: true })
    SSRNO: string

    @Column({ nullable: true })
    TSRNO: string

    @Column({ nullable: true })
    BALTYPE: string

    @Column({ nullable: true })
    LAST_FRI_TOT_REQUIRED: number

    @Column({ nullable: true })
    LAST_FRI_DED_REQUIRED: number

    @Column({ nullable: true })
    FRI_TOT_REQUIRED: number

    @Column({ nullable: true })
    PERCENTAGE: number

    @Column({ nullable: true })
    PERCENTAGE_CONSIDARATION: string

    @Column({ nullable: true })
    PERCENTAGE_OF_CODE: string

    @Column({ nullable: true })
    CALCULATE_AMOUNT: number

    @Column({ nullable: true })
    CREDIT_AMOUNT: number

    @Column({ nullable: true })
    DEBIT_AMOUNT: number

    @Column({ nullable: true })
    LAST_FRIDAY_TOTAL: number

    @Column({ nullable: true })
    FINAL_AMOUNT: number

    @Column({ nullable: true })
    SERIAL_NO: number

    @Column({ nullable: true })
    CASH_ASSET_FLAG: string

    @Column({ nullable: true })
    FINAL_AMOUNT1: number

    @Column({ nullable: true })
    FINAL_AMOUNT2: number

    @Column({ nullable: true })
    FINAL_AMOUNT3: number

    @Column({ nullable: true })
    FINAL_AMOUNT4: number

    @Column({ nullable: true })
    FINAL_AMOUNT5: number

    @Column({ nullable: true })
    FINAL_AMOUNT6: number

    @Column({ nullable: true })
    FINAL_AMOUNT7: number

    @Column({ nullable: true })
    FINAL_AMOUNT8: number

    @Column({ nullable: true })
    FINAL_AMOUNT9: number

    @Column({ nullable: true })
    FINAL_AMOUNT10: number

    @Column({ nullable: true })
    FINAL_AMOUNT11: number

    @Column({ nullable: true })
    FINAL_AMOUNT12: number

    @Column({ nullable: true })
    FINAL_AMOUNT13: number

    @Column({ nullable: true })
    FINAL_AMOUNT14: number

    @Column({ nullable: true })
    INPUT_ALLOWED: number

    @Column({ nullable: true })
    ALTERNATIVE_FRIDAY_NAME: string

    @Column({ nullable: true })
    FINAL_AMOUNT15: number

}
