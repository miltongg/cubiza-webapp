import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from "./dto/update-users.dto";
// import createProfileDto from './dto/create-profile.dto';
import Profile from './profile.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>
  ) { }


  // Create user
  async createUser(user: CreateUserDto) {

    const userFound = await this.userRepository.findOne({
      where: {
        username: user.username
      }
    })

    if (userFound) {
      return new HttpException('Username already exist', HttpStatus.CONFLICT)
    }

    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }


  // Get user list
  getUsers() {
    return this.userRepository.find()
  }


  // Get one user
  async getUser(id: number) {

    const userFound = await this.userRepository.findOne({
      where: {
        id
      },
      relations: ['posts']
    })

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return userFound;
  }


  // Delete user
  async deleteUser(id: number) {

    const result = await this.userRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return result
  }

  async updateUser(id: number, user: UpdateUserDto) {

    const userFound = await this.userRepository.findOne({
      where: { id }
    })

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    const updateUser = { ...userFound, ...user }

    return this.userRepository.save(updateUser)
  }


  // Create profile
  // async createProfile(id: number, profile: createProfileDto) {
    //
    // const userFound = await this.userRepository.findOne({
    //   where: {
    //     id
    //   }
    // })
    //
    // if (!userFound) {
    //   return new HttpException('User not found', HttpStatus.NOT_FOUND)
    // }

    // const newProfile = this.profileRepository.create(profile)

    // const savedProfile = await this.profileRepository.save(newProfile)

    // userFound.profile = savedProfile

    // return this.userRepository.save(userFound)

  // }

}
