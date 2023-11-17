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
} from '@nestjs/common';
import { CatsService, Cat, CatType } from './cat.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  findCatsByFilter(@Query('type') type: CatType, @Res() response): Cat[] {
    return response
      .status(HttpStatus.OK)
      .send(this.catsService.findCatsByType(type));
  }
  @Get(':id')
  findCatById(@Param() param: { id: string }): Cat {
    return this.catsService.getCatById(param.id);
  }
  @Post()
  addCat(@Body() body: { name: string; age: number }) {
    this.catsService.addCat(body.name, body.age);
    return 200;
  }
  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.catsService.updateCatById(id, body);
    return 200;
  }
  @Delete(':id')
  deleteCat(@Param('id') id) {
    return this.catsService.deleteCatById(id);
  }
}
