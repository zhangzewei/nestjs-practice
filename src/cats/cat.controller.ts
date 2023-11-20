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
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

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
  findCatById(@Param('id') id: number): Cat {
    console.log(typeof id);
    const cat = this.catsService.getCatById(id);
    if (!cat) {
      throw new NotFoundException('cat not find');
    }
    return cat;
  }
  @Post()
  addCat(@Body() body: CreateCatDto) {
    this.catsService.addCat(body);
    return body;
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateCatDto) {
    console.log(typeof id);
    this.catsService.updateCatById(id, body);
  }
  @Delete(':id')
  deleteCat(@Param('id') id) {
    return this.catsService.deleteCatById(id);
  }
}
