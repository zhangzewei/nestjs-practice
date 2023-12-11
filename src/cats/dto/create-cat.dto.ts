import { IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString({ each: true })
  food: string[];
}
