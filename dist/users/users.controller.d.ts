import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<User[]>;
    findOneUser(username: any): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUser(id: any): Promise<void>;
    updateUser(updateUserDto: CreateUserDto, id: any): Promise<void>;
}
