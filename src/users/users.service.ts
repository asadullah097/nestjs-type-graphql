import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository:Repository<User>){}
    findAll():Promise<User[]>{
        return this.usersRepository.find();
    }
    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }
    create(user:CreateUserDto){
     let userObj=this.usersRepository.create(user)
     return this.usersRepository.save(userObj)
    }
    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
