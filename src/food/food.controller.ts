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
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';

@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}
  @Get()
  findAll() {
    return this.foodService.findAll();
  }
  @Post()
  create(@Body() body: CreateFoodDto) {
    return this.foodService.create(body.name);
  }
}
