import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ExistValidatorAdapter {
  constructor(private readonly model: Model<any>) {} // Inyecta el modelo apropiado

  async validateId(id: string) {
    const document = await this.model.findById(id);
    if (!document) {
      throw new NotFoundException(`El documento con la ID "${id}" no existe.`);
    }
    return document; // Retorna true si la ID existe
  }
}
