import { timeStamp } from 'console';
import { Column, CreateDateColumn, Entity, Generated, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ROLE_DEFINE } from './role-define.entity';
import { ROLEHASPERMISSION } from './role-has-permission.entity';
import { USERDEFINATION } from './user-defination.entity';

@Entity()
export class ROLEDATAMASTER {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    NAME: string;
    
    @Column({nullable:true})
    STATUS: string;

    @Column({type: 'timestamp', default:() => 'CURRENT_TIMESTAMP'})
    USER_CREATED_AT: Date;

    @OneToOne(type=> ROLEHASPERMISSION, Rolehaspermission=>Rolehaspermission.Role)
    Rolehaspermission : ROLEHASPERMISSION;

    @OneToMany(type=> ROLE_DEFINE,roleDefine=>roleDefine.Role)
    roleDefine : ROLE_DEFINE[];

    // @OneToMany(type=>USERDEFINATION,user=>user.Role)
    // user:USERDEFINATION[]
}