import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MENULIST {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    Name : String;

    @Column()
    parentCode : number;
}