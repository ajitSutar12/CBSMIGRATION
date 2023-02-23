import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SHARETRAN{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    TRAN_NO: number;

    @Column()
    SERIAL_NO: number;

    @Column()
    BRANCH_CODE: number;

    @Column()
    TRAN_DATE: string;

    @Column()
    TRAN_TIME: string;

    @Column()
    TRAN_TYPE: string;

    @Column({nullable:true})
    TRAN_MODE: string;

    @Column({nullable:true})
    TRAN_DRCR: string;

    @Column({nullable:true})
    TRAN_ACNOTYPE: string;

    @Column({nullable:true})
    TRAN_ACTYPE: string;

    @Column({nullable:true})
    TRAN_ACNO: string;

    @Column({nullable:true})
    TRAN_AMOUNT: string;

    @Column({nullable:true})
    TRAN_GLACNO: string;

    @Column({nullable:true})
    NO_OF_SHARES: string;

    @Column({nullable:true})
    NARRATION: string;

    @Column({nullable:true})
    CERTIFICATE_NO: string;

    @Column({nullable:true})
    SHARES_FROM_NO: string;

    @Column({nullable:true})
    SHARES_TO_NO: string;

    @Column({nullable:true})
    FACE_VALUE: string;

    @Column({ nullable: true })
    TRAN_SOURCE_TYPE: string

    @Column({nullable:true})
    TRANSFER_ACTYPE_FROM: string;

    @Column({nullable:true})
    TRANSFER_MEMBER_NO_FROM: string;

    @Column({nullable:true})
    TRANSFER_ACTYPE_TO: string;

    @Column({nullable:true})
    TRANSFER_MEMBER_NO_TO: string;

    @Column({nullable:true})
    SHARES_TRANSFER_DATE: string;

    @Column({nullable:true})
    SHARES_RETURN_DATE: string;

    @Column({nullable:true})
    RESULATION_DATE: string;

    @Column({nullable:true})
    RESULATION_NO: string;

    @Column({nullable:true})
    AC_CLOSED: number;

    @Column({nullable:true})
    AC_CLOSEDT: string;

    @Column({nullable:true})
    CHEQUE_DATE: string;

    @Column({nullable:true})
    CHEQUE_SERIES: string;

    @Column({nullable:true})
    CHEQUE_NO: string;

    @Column({nullable:true})
    DIVIDEND_YEAR: string;

    @Column({default:false})
    DIVIDEND_ENTRY: boolean;

    @Column({nullable:true})
    CASHIER_CODE: string;

    @Column({nullable:true})
    USER_CODE: string;

    @Column({nullable:true})
    OFFICER_CODE: string;

    @Column({nullable:true})
    TRAN_ENTRY_TYPE: string;

    @Column({nullable:true})
    OTHER1_AMOUNT: string;

    @Column({nullable:true})
    OTHER2_AMOUNT: string;

    @Column({nullable:true})
    SH_CERTIFICATE_PRINTED: string;

    @Column({nullable:true})
    NEW_DATE: string;


}