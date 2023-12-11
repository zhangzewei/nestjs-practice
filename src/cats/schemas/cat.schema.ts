import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as mongooseSchema } from 'mongoose';
import { Food } from 'src/food/schemas/food.schema';
export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop([{ type: Food, ref: 'Food' }])
  food: Food[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
