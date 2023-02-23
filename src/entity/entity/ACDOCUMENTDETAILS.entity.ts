import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { DOCUMENTMASTER } from 'src/entity/entity/document-master.entity';
@Entity()
export class ACDOCUMENTDETAILS {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    AC_ACNOTYPE: string

    @Column()
    AC_TYPE: number

    @Column()
    AC_NO: number

    @Column()
    DOCUMENT_CODE: number

    @ManyToOne(() => SCHEMAST, (acDocument) => acDocument.acDocumentDetails, {
        cascade: true
    })
    @JoinColumn({ name: "AC_TYPE" })
    acDocument: SCHEMAST[];

    @ManyToOne(() => SCHEMAST, (acDocumentMaster) => acDocumentMaster.acDocumentDetails, {
        cascade: true
    })
    @JoinColumn({ name: "DOCUMENT_CODE" })
    acDocumentMaster: DOCUMENTMASTER[];

}
