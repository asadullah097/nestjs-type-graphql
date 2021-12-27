import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(private  userService:UsersService){}

    @Query("getAllUsers")
    findAll(){
       return this.userService.findAll()
    }
     
    @Query("getUser")
    findUser(@Args('id') id:string){
       return this.userService.findOne(id);
    }
    @Mutation("createUser")
    createUser(@Args() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto);
    }
}
