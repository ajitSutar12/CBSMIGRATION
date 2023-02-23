
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DAILYSHRTRAN {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_DATE: string

    @Column({ nullable: true })
    TRAN_NO: number

    @Column({ nullable: true })
    SERIAL_NO: number

    @Column({ nullable: true })
    BRANCH_CODE: number

    @Column({ nullable: true })
    TRAN_TIME: string

    @Column({ nullable: true })
    TRAN_TYPE: string

    @Column({ nullable: true })
    TRAN_MODE: string

    @Column()
    TRAN_DRCR: string

    @Column()
    TRAN_STATUS: string

    @Column({ nullable: true })
    TRAN_ACNOTYPE: string

    @Column()
    TRAN_ACTYPE: string

    @Column()
    TRAN_ACNO: string

    @Column()
    TRAN_AMOUNT: number

    @Column()
    TRAN_GLACNO: number

    @Column()
    NO_OF_SHARES: number

    @Column()
    NARRATION: string

    @Column()
    CERTIFICATE_NO: number

    @Column()
    SHARES_FROM_NO: number

    @Column()
    SHARES_TO_NO: number

    @Column()
    FACE_VALUE: number

    @Column()
    TRANSFER_ACTYPE_FROM: string

    @Column()
    TRANSFER_MEMBER_NO_FROM: number

    @Column()
    TRANSFER_ACTYPE_TO: string

    @Column()
    TRANSFER_MEMBER_NO_TO: number

    @Column()
    SHARES_TRANSFER_DATE: string

    @Column()
    SHARES_RETURN_DATE: string

    @Column()
    RESULATION_DATE: string

    @Column()
    RESULATION_NO: string

    @Column()
    AC_CLOSED: number

    @Column()
    AC_CLOSEDT: string

    @Column()
    USER_CODE: string

    @Column()
    OFFICER_CODE: string

    @Column()
    TRAN_ENTRY_TYPE: string

    @Column()
    IS_AUTO_TRF_ENTRY: number

    @Column()
    TRAN_SOURCE_NO: number

    @Column()
    SH_CERTIFICATE_PRINTED: number


}
