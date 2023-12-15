import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  findAll() {
    return this.catsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return this.catsService.findOne(id);
  }
  @Post()
  create(@Body() body: CreateCatDto) {
    return this.catsService.create(body);
  }
}
