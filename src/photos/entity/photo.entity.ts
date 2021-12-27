import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo{
 
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name:string

  @ManyToOne(type=>User, user=>user.id)
  user:User

  @JoinColumn()
  user_id:number
}