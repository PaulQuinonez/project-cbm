import { Injectable } from '@nestjs/common';
import { CreateFlujoProcesoDto } from './dto/create-flujo_proceso.dto';
import { UpdateFlujoProcesoDto } from './dto/update-flujo_proceso.dto';

@Injectable()
export class FlujoProcesoService {
  create(createFlujoProcesoDto: CreateFlujoProcesoDto) {
    return 'This action adds a new flujoProceso';
  }

  findAll() {
    return `This action returns all flujoProceso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flujoProceso`;
  }

  update(id: number, updateFlujoProcesoDto: UpdateFlujoProcesoDto) {
    return `This action updates a #${id} flujoProceso`;
  }

  remove(id: number) {
    return `This action removes a #${id} flujoProceso`;
  }
}
