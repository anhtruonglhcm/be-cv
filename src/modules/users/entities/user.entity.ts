import { AutoMap } from "@automapper/classes";
import { AbstractEntity } from "src/common/entities";
import { Column, Entity } from "typeorm";
import { Role, UserStatus } from "../enums";

@Entity({ name: "users" })
export class User extends AbstractEntity {
  @AutoMap()
  @Column({ type: "citext", unique: true })
  username: string;

  @AutoMap()
  @Column({ default: 0 })
  coin: number;

  @AutoMap()
  @Column({ type: "enum", enum: Role, default: Role.User })
  role: Role;

  @Column({ nullable: true })
  passwordHash?: string;

  @Column({ unique: true })
  apiKey: string;

  @AutoMap()
  @Column({ type: "enum", enum: UserStatus, default: UserStatus.NotReady })
  status: UserStatus;
}
