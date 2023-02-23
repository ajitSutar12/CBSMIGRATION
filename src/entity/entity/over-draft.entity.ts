import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TODTRAN {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    AC_TYPE: string

    @Column({ default: 0 })
    AC_NO: number

    @Column({ nullable: true })
    AC_ODAMT: string

    @Column({ nullable: true })
    AC_SODAMT: string

    @Column({ nullable: true })
    AC_ODDAYS: string

    @Column({ nullable: true })
    AC_ODDATE: string

    @Column({ nullable: true })
    RELEASE_DATE: string
}