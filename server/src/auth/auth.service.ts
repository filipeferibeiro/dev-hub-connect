import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadDto } from './dto/payload.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(dto: CreateUserDto) {
    // 1. Check if user email already exists in database
    const existingUser = await this.repository.findOneBy({ email: dto.email });
    if (existingUser) {
      return new BadRequestException('Email in use');
    }

    // 2. Generate encrypted password
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(dto.password, salt, 32)) as Buffer;
    const saltAndHash = `${salt}.${hash.toString('hex')}`;

    const user: CreateUserDto = {
      ...dto,
      password: saltAndHash,
    };

    // 3. Add new user to database
    const userCreated = this.repository.create(user);
    await this.repository.save(userCreated);

    console.log('Signing up', user);

    // 4. Return created user data without password
    const { password: _, ...result } = user;

    return result;
  }

  async signIn(dto: SignInDto) {
    // 1. Check if user exists in database
    const user = await this.repository.findOneBy({ email: dto.email });
    if (!user) {
      return new UnauthorizedException('Invalid credentials');
    }

    // 2. Check if hash is valid
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(dto.password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      return new UnauthorizedException('Invalid credentials');
    }

    // 4. Return user info and JWT with email and user id
    console.log('Signed in', user);
    const payload: PayloadDto = { email: user.email, sub: user.id };

    const { password, ...userInfo } = user;

    return {
      user: userInfo,
      backendTokens: {
        accessToken: this.jwtService.sign(payload),
      },
    };
  }
}
