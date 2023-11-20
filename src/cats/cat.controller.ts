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
    const cat = this.catsService.getCatById(param.id);
    if (!cat) {
      throw new NotFoundException('cat not find');
    }
    return cat;
  }
  @Post()
  addCat(@Body() body: { name: string; age: number }) {
    this.catsService.addCat(body.name, body.age);
  }
  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.catsService.updateCatById(id, body);
  }
  @Delete(':id')
  deleteCat(@Param('id') id) {
    return this.catsService.deleteCatById(id);
  }
}
