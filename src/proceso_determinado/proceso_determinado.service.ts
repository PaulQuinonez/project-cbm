import { Injectable } from '@nestjs/common';
import { CreateProcesoDeterminadoDto } from './dto/create-proceso_determinado.dto';
import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

@Injectable()
export class ProcesoDeterminadoService {
  create(createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
    return 'This action adds a new procesoDeterminado';
  }

  findAll() {
    return `This action returns all procesoDeterminado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} procesoDeterminado`;
  }

  update(id: number, updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto) {
    return `This action updates a #${id} procesoDeterminado`;
  }

  remove(id: number) {
    return `This action removes a #${id} procesoDeterminado`;
  }
}
