import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todos {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    default: false,
  })
  completed: boolean;

}