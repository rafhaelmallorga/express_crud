import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Video } from "./video.entity";

@Entity("categories")
export class Category {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany((type) => Video, (video) => video.category, { eager: true })
  videos: Video[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
