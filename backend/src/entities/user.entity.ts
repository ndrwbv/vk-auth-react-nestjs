import BaseEntity from "./base.entity";
import { Entity, Column } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    nullable: true,
  })
  vk_id: number;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    select: false,
    nullable: true,
  })
  password: string;

  @Column({
    nullable: false,
  })
  grant: number;

  @Column()
  avatar_url: string;
}
