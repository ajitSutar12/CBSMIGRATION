import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HISTORYDENO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_DATE: string

    @Column()
    CASHIER_CODE: string

    @Column({ nullable: true })
    DENO_1000: number

    @Column({ nullable: true })
    DENO_500: number

    @Column({ nullable: true })
    DENO_100: number

    @Column({ nullable: true })
    DENO_50: number

    @Column({ nullable: true })
    DENO_20: number

    @Column({ nullable: true })
    DENO_10: number

    @Column({ nullable: true })
    DENO_5: number

    @Column({ nullable: true })
    DENO_2: number

    @Column({ nullable: true })
    DENO_1: number

    @Column({ nullable: true })
    DENO_COINES_AMT: number

    @Column({ nullable: true })
    TOTAL_AMOUNT: number

    @Column({ nullable: true })
    OPENING_CASH: number

    @Column({ nullable: true })
    DEPOSITS: number

    @Column({ nullable: true })
    WITHDRAWAL: number

    @Column({ nullable: true })
    DENO_2000: number

    @Column({ nullable: true })
    DENO_200: number
    
    @Column({ nullable: true })
    BRANCH_CODE: number
}
