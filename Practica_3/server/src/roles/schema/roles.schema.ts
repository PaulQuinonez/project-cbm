import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type RolesDocument = Roles & Document;

@Schema()
export class Roles {
  @Prop()
  name: string;
  @Prop()
  _id: ObjectId;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);