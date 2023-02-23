import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { INTRATELOAN } from './interest-rate-for-loan-and-cc.entity';
@Entity()
export class LNCCLOAN {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  FROM_AMOUNT: string

  @Column({ nullable: true })
  TO_AMOUNT: string

  @Column({ nullable: true })
  INT_RATE: string

  @Column({ nullable: true })
  PENAL_INT_RATE: string

  @Column({ unique: false })
  idRateID: number
  @ManyToOne(() => INTRATELOAN, (idRate) => idRate.rate, {
      cascade: true
  })
  @JoinColumn({ name: "idRateID" })
  idRate: INTRATELOAN[]; 
}