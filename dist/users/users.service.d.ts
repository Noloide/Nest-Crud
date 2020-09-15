import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getAll(): Promise<User[]>;
    findOne(username: string): Promise<User>;
    createUser(user: User): Promise<User>;
    deleteUser(_id: number): Promise<void>;
    updateUser(_id: number, user: User): Promise<void>;
}
