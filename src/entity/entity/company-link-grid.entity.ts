
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { COMPANYGROUPMASTER } from './company-group-master.entity';
import { COMPANYGROUPLINKMASTER } from './company-group-link-master.entity';
@Entity()
export class COMPANYGROUPLINKGRIDMASTER {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  AC_TYPE: number;

  @Column({nullable:true})
  AC_NO: number;

  @Column({nullable:true})
  DEFAULT_AMOUNT: number;

  @Column()
  COMP_LINK_CODE: number;
  @ManyToOne(() => COMPANYGROUPLINKMASTER, (comapny) => comapny.comapnylink, {
    cascade: true
  })
  @JoinColumn({ name: "COMP_LINK_CODE" })
  comapny: COMPANYGROUPMASTER[];
  
}
