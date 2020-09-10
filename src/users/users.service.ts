import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async getAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOneUser(_id: number): Promise<User> {
    return await this.usersRepository.findOne({ id: _id });
  }

  async createUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async deleteUser(_id: number): Promise<void> {
    await this.usersRepository.delete({ id: _id });
  }

  async updateUser(_id: number, user: User): Promise<void> {
    await this.usersRepository.update({ id: _id }, user);
  }
}
