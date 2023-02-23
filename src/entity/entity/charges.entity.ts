import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CHARGES } from './scheme-type-charges.entity';

@Entity()
export class CHARGESAMT {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  SERIAL_NO: number;

  @Column({ nullable: true })
  FROM_RANGE: string;

  @Column({ nullable: true })
  TO_RANGE: string;

  @Column({ nullable: true })
  CHARGES_AMT: string;

  @Column({ unique: false })
  idRateID: number
  @ManyToOne(() => CHARGES, (idRate) => idRate.rate, {
      cascade: true
  })
  @JoinColumn({ name: "idRateID" })
  idRate: CHARGES[]; 
}