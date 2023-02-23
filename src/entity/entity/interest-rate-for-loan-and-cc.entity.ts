import { INTCATEGORYMASTER } from 'src/entity/entity/interest-category-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { SCHEMDATA } from 'src/entity/entity/SCHEMDATA.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LNCCLOAN } from './loan-and-cc.entity';
@Entity()
export class INTRATELOAN {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  EFFECT_DATE: string

  @Column({nullable: true})
  ACNOTYPE: number
  @ManyToOne(() => SCHEMAST, (scheme) => scheme.id, {
    cascade: true
  })
  @JoinColumn({ name: "ACNOTYPE" })
  scheme: SCHEMAST[];

  @Column()
  INT_CATEGORY: number
  @ManyToOne(() => INTCATEGORYMASTER, (category) => category.loanandcc, {
      cascade: true
  })
  @JoinColumn({ name: "INT_CATEGORY" })
  category: INTCATEGORYMASTER[];

  @OneToMany(() => LNCCLOAN, rate => rate.idRate)
  rate: LNCCLOAN[];

}
