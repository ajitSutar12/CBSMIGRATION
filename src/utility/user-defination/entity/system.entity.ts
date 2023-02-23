import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class System_master{
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    DateFormat : string;
}