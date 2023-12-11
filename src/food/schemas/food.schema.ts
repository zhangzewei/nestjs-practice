import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type FoodDocument = HydratedDocument<Food>;

@Schema()
export class Food {
    @Prop()
    name: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
