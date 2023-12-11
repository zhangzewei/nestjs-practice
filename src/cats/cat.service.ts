import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { FoodService } from 'src/food/food.service';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<Cat>,
    private foodService: FoodService,
  ) { }
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async create(body: CreateCatDto) {
    const foodList = await this.foodService.findAll();
    const foodData = body.food.map(foodName => {
      return foodList.find(f => f.name === foodName);
    });
    let newCat = new this.catModel();
    newCat.name = body.name;
    newCat.age = body.age;
    newCat.food = foodData;
    return await newCat.save();
  }
}
