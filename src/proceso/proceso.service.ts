import { Injectable } from '@nestjs/common';
import { CreateProcesoDto } from './dto/create-proceso.dto';
import { UpdateProcesoDto } from './dto/update-proceso.dto';

@Injectable()
export class ProcesoService {
  create(createProcesoDto: CreateProcesoDto) {
    return 'This action adds a new proceso';
  }

  findAll() {
    return `This action returns all proceso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proceso`;
  }

  update(id: number, updateProcesoDto: UpdateProcesoDto) {
    return `This action updates a #${id} proceso`;
  }

  remove(id: number) {
    return `This action removes a #${id} proceso`;
  }
}
