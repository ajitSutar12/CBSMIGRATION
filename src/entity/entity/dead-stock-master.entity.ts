import { OWNBRANCHMASTER } from './own-branch-master.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ITEMMASTER {
    @PrimaryGeneratedColumn()
   id: number;

    @Column()
    ITEM_TYPE:string;

    @Column()
    @Generated('increment')
    ITEM_CODE:number;

    @Column()
    ITEM_NAME:string;

    @Column()
    PURCHASE_DATE:string;

    @Column()
    DEPR_CATEGORY:string;

    @Column({ nullable: true})
    SUPPLIER_NAME:string;
    
    @Column({ nullable: true})
    PURCHASE_OP_QUANTITY:string;

    @Column({ nullable: true})
    PURCHASE_RATE:string;

    @Column({ nullable: true})
    PURCHASE_VALUE:string;

    @Column({ nullable: true })
    OP_BAL_DATE:string;

    @Column({ nullable: true})
    OP_QUANTITY:string;

    @Column({ nullable: true})
    OP_BALANCE:string;

    @Column({ nullable: true })
    LAST_DEPR_DATE:string;

    @Column({ nullable: true})
    GL_ACNO:string;

    @Column({ nullable: true})
    PURCHASE_QUANTITY:string;

    @Column({ nullable: true })
    LAST_UNLOCK_DATE:string;

    @Column({ nullable: true })
    SYSCHNG_LOGIN: string;

    @Column({ nullable: true })
    BRANCH_CODE: number;
    @ManyToOne(() => OWNBRANCHMASTER, (BranchCodeMaster) => BranchCodeMaster.branchCodeds, {
      cascade: true
    })
    @JoinColumn({ name: "BRANCH_CODE" })
    BranchCodeMaster: OWNBRANCHMASTER[];
  
}