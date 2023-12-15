import { Injectable, Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { FoodModule } from 'src/food/food.module';
import { FoodService } from 'src/food/food.service';

class Constants {
  getFoodList() {
    // logic 
    return ['beef', 'chicken']
  }
}

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://lanamarkzzw:pass123@cluster0.zxzpzz8.mongodb.net/pets?retryWrites=true&w=majority`),
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
