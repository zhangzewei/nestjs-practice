import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CatModule } from './cats/cat.module';
import { AppService } from './app.service';

const mongodbUrl =
  'mongodb+srv://lanamarkzzw:pass123@cluster0.zxzpzz8.mongodb.net/?retryWrites=true&w=majority';

const MongodbModule = MongooseModule.forRoot(mongodbUrl);

@Module({
  imports: [MongodbModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
