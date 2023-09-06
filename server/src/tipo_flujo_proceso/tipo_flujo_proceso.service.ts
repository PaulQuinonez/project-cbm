import { Injectable } from '@nestjs/common';
import { CreateTipoFlujoProcesoDto } from './dto/create-tipo_flujo_proceso.dto';
import { UpdateTipoFlujoProcesoDto } from './dto/update-tipo_flujo_proceso.dto';

@Injectable()
export class TipoFlujoProcesoService {
  create(createTipoFlujoProcesoDto: CreateTipoFlujoProcesoDto) {
    return 'This action adds a new tipoFlujoProceso';
  }

  findAll() {
    return `This action returns all tipoFlujoProceso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoFlujoProceso`;
  }

  update(id: number, updateTipoFlujoProcesoDto: UpdateTipoFlujoProcesoDto) {
    return `This action updates a #${id} tipoFlujoProceso`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoFlujoProceso`;
  }
}
