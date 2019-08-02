import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User) {
    const res = this.userRepository.create(user);
    console.log(res);
    return null;
  }
}
