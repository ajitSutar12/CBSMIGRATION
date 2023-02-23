import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TDSRATE {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FIN_YEAR: string;

  @Column()
  INTEREST_AMOUNT: string;

  @Column()
  TDS_RATE: string;

  @Column()
  SURCHARGE_RATE: string;

  @Column()
  EFFECT_DATE: string;
  
}







