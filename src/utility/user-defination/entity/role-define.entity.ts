import { OWNBRANCHMASTER } from '../../../entity/entity/own-branch-master.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ROLEDATAMASTER } from "./role-master.entity";
import { USERDEFINATION } from "./user-defination.entity";

@Entity()
export class ROLE_DEFINE {

    @PrimaryGeneratedColumn()
    id : Number;

    @Column()
    UserId : Number;

    @Column()
    RoleId : Number;

    @ManyToOne(type=>ROLEDATAMASTER, Role => Role.id)
    @JoinColumn({name: "RoleId"})
    Role : ROLEDATAMASTER[];

    @ManyToOne(type=>USERDEFINATION,user=>user.id)
    @JoinColumn({name:"UserId"})
    user : USERDEFINATION[]
}