import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';

const dbName = "pets";

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://lanamarkzzw:pass123@cluster0.zxzpzz8.mongodb.net/${dbName}?retryWrites=true&w=majority`),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatModule {}
