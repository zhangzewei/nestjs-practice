import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food } from './schemas/food.schema';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food.name) private foodModel: Model<Food>
  ) {}
  async findAll(): Promise<Food[]> {
    return this.foodModel.find().exec();
  }

  async create(food: string): Promise<Food> {
    const newFood = new this.foodModel();
    newFood.name = food;
    return newFood.save();
  }
}
