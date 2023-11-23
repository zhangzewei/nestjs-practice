import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './cats/cat.module';
import { AppService } from './app.service';

@Module({
  imports:  [CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
