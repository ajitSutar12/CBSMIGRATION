import { SECINSURANCE } from 'src/entity/entity/customer-insurance.entity';
import { FIREPOLICY } from 'src/entity/entity/fire-policy.entity';
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class INSUARANCEMASTER {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  CODE: number;

  @Column({ length: 100 })
  NAME: string;

  @OneToMany(() => FIREPOLICY, insurancemaster => insurancemaster.insurancemaster, {
    cascade: ["insert", "update"]
  })
  insurancemaster: FIREPOLICY[];

  @OneToMany(() => SECINSURANCE, custinsurancemaster => custinsurancemaster.custinsurancemaster, {
    cascade: ["insert", "update"]
  })
  custinsurancemaster: SECINSURANCE[];
}
