import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email: email });
  }
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['firstname', 'lastname', 'email'],
      where: [{ id: id }],
    });
  }
  async saveUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }
  deleteUsers(user: User): void {
    this.usersRepository.delete(user);
  }
}
