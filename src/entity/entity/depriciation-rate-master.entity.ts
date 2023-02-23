import { DEPRCATEGORY } from './depriciation-category-master.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DEPRRATE {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  DEPR_RATE: string;

  @Column()
  EFFECT_DATE: string;

  @Column()
  CATEGORY: number;
  @ManyToOne(() => DEPRCATEGORY, (decategory) => decategory.deprerate, {
      cascade: true
  })
  @JoinColumn({ name: "CATEGORY" })
  decategory: DEPRCATEGORY[];

}
