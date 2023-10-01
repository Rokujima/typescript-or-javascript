import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userDocument: Model<UserDocument>
  ){}

  create(createUserDto: any) {
    return this.userDocument.create(createUserDto);
  }

  findAll() {
    return this.userDocument.find();
  }

  findOne(id: string) {
    return this.userDocument.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userDocument.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.userDocument.findByIdAndDelete(id);
  }
}
