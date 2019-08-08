import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column('text')
  phone: string;

  @Column({
    name: 'confirmation_token',
    type: 'text',
    nullable: true,
  })
  confirmationToken: string;

  @Column({
    type: 'timestamp with time zone',
    name: 'confirmation_sent_at',
    nullable: true,
  })
  confirmationSentAt: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
