import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }
  @Post()
  post(@Body() body) {
    return this.service.saveUser(body);
  }
  @Put()
  put(@Body() body) {
    return this.service.saveUser(body);
  }
  @Delete(':id')
  delete(@Param() params) {
    this.service.deleteUsers(params.id);
    return;
  }
}
