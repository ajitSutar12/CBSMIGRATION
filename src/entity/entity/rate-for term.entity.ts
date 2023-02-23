import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { INTRATETD } from './interest-rate-for-term-deposit.entity';
@Entity()
export class TERMINTRATE {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  FROM_DAYS: string

  @Column({nullable:true})
  FROM_MONTHS: string

  @Column({nullable:true})
  TO_DAYS: string

  @Column({nullable:true})
  TO_MONTHS: string

  @Column()
  INT_RATE: String

  @Column()
  PENAL_INT_RATE: string

  @Column({ unique: false })
  idRateID: number
  @ManyToOne(() => INTRATETD, (idRate) => idRate.rate, {
      cascade: true
  })
  @JoinColumn({ name: "idRateID" })
  idRate: INTRATETD[]; 
}