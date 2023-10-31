import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';
// import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm';
// import Post from '../posts/post.entity';
// import Profile from './profile.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({nullable: true})
  authStrategy: string;

  // @OneToOne(() => Profile)
  // @JoinColumn()
  // profile: Profile
  //
  // @OneToMany(() => Post, post => post.author)
  // posts: Post[]
}
