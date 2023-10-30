import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
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
}
