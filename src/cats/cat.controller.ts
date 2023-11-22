import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Res,
  Post,
  Body,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  addCat(@Body() body: CreateCatDto) {
    return this.catsService.create(body);
  }
}
