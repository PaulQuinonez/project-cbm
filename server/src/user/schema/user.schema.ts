import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

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

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Roles'})
    // roleId: Roles
}

export const UserSchema = SchemaFactory.createForClass(User);