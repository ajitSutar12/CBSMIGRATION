import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { INTRATEPATSCHEMES } from '../entity/pat-scheme-interest-rates.entity'

@Entity()
export class INTRATE {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  SERIAL_NO :number;

  @Column({ nullable: true })
  MONTHS: string

  @Column({ nullable: true })
  DAYS: string

  @Column()
  INT_RATE: string

  @Column({ unique: false })
  idRateID: number
  @ManyToOne(() => INTRATEPATSCHEMES, (idRate) => idRate.rate, {
      cascade: true
  })
  @JoinColumn({ name: "idRateID" })
  idRate: INTRATEPATSCHEMES[]; 
}