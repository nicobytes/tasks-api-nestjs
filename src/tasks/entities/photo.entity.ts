import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Profile } from './profile.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Profile, (profile) => profile.photos)
  profile: Profile;
}
