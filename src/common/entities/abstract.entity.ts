import { AutoMap } from "@automapper/classes";
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class AbstractEntity {
  @AutoMap()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @AutoMap()
  @CreateDateColumn({ type: "timestamptz" })
  created!: Date;

  @AutoMap()
  @UpdateDateColumn({ type: "timestamptz" })
  lastModified?: Date;
}
