import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DPMASTER } from './dpmaster.entity'
@Entity()
export class BALACATA {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  BC_CODE: number;

  @Column({ length: 100 })
  BC_NAME: string;

  @Column({ nullable: true })
  BC_MINBAL: string;

  @OneToMany(() => DPMASTER, (minimumBalance) => minimumBalance.MinimumBalanceMaster, {
    cascade: ["insert", "update"]
  })
  minimumBalance: DPMASTER[];
}
