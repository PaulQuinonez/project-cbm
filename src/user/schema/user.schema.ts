import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//TODO El SCHEMA de los COCINEROS (Collection)
export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    ciudadId: string

    @Prop()
    roleId: string
}

export const UserSchema = SchemaFactory.createForClass(User);