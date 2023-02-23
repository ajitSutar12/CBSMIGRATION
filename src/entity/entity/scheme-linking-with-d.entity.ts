import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SCHEMEDOCUMENTLINK {
 
  @PrimaryGeneratedColumn()
  id: number;


  @Column({nullable:true})
  SCHEME_CODE:string;
  
  @Column({nullable:true})
  DOCUMENT_CODE:string;
  
}
