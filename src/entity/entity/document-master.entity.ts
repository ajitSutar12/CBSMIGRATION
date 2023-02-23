import { ACDOCUMENTDETAILS } from 'src/entity/entity/ACDOCUMENTDETAILS.entity';
import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CUSTDOCUMENT } from './document.entity'
@Entity()
export class DOCUMENTMASTER {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  CODE: number;

  @Column({ length: 100 })
  NAME: string;

  @OneToMany(() => CUSTDOCUMENT, custdocument => custdocument.DocumentMaster, {
    cascade: ["insert", "update"]
  })
  custdocument: CUSTDOCUMENT[];

  @OneToMany(() => ACDOCUMENTDETAILS, (acDocumentDetails) => acDocumentDetails.acDocumentMaster, {
    cascade: ["insert", "update"]
  })
  acDocumentDetails: ACDOCUMENTDETAILS[];
}
