import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PREMATULESSRATE } from './premature-pigmy-less-int-rate.entity';

@Entity()
export class PREMATULESS {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  @Generated('increment')
  SERIAL_NO: number;

  @Column()
  FROM_MONTHS: string;

  @Column()
  TO_MONTHS: string;

  @Column()
  LESS_INT_RATE: string;
 
  @Column({ unique: false })
  idRateID: number
  @ManyToOne(() => PREMATULESSRATE, (idRate) => idRate.rate, {
      cascade: true
  })
  @JoinColumn({ name: "idRateID" })
  idRate: PREMATULESSRATE[]; 
}