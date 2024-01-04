import { Injectable, Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { FoodModule } from 'src/food/food.module';
import { FoodService } from 'src/food/food.service';
import { ConfigModule } from '@nestjs/config';
import catConfig from './catConfig';

class Constants {
  getFoodList() {
    // logic 
    return ['beef', 'chicken']
  }
}

@Module({
  imports: [
    ConfigModule.forFeature(catConfig),
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
    ]),
    FoodModule,
  ],
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'FOOD_LIST', // token
      // useClass: Constants,
      useFactory: async (foodService: FoodService) => {
        return await foodService.findAll();
      },
      inject: [FoodService]
    }
  ],
})
export class CatsModule { }
