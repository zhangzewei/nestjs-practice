import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { FoodService } from 'src/food/food.service';
import { Food } from 'src/food/schemas/food.schema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<Cat>,
    // private foodService: FoodService,
    @Inject('FOOD_LIST') private foodList
  ) {
    console.log(this.foodList)
  }
  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id): Promise<Cat> {
    return this.catModel.findById(id);
  }

  async create(body: CreateCatDto) {
    // const foodList = await this.foodService.findAll();
    const foodData = body.food.map(foodName => {
      return this.foodList.find(f => f.name === foodName);
    });
    let newCat = new this.catModel();
    newCat.name = body.name;
    newCat.age = body.age;
    newCat.food = foodData;
    return await newCat.save();
  }
}
