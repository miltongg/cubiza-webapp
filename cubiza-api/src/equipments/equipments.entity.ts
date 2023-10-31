import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: 'equipments'})
export class Equipment {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  model: string

  @Column()
  type: string

  @Column()
  available: boolean

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date

}