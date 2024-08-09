import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { User } from './user.mongo.entity';
import { AddUserDto } from './user.dto';
// import { AddUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: MongoRepository<User>,
  ) {}
  createOrSave(user: AddUserDto) {
    console.log('user', user);
    const dataUser = new User();
    dataUser.name = user.name;
    dataUser.email = user.email;
    dataUser.username = user.username;
    // console.log('====userRepository', this.userRepository.s);
    return this.userRepository.save(dataUser);
  }
}
