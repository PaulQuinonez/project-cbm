import { Injectable } from '@nestjs/common';
import { CreateSolicitudBajaDto } from './dto/create-solicitud_baja.dto';
import { UpdateSolicitudBajaDto } from './dto/update-solicitud_baja.dto';

@Injectable()
export class SolicitudBajaService {
  create(createSolicitudBajaDto: CreateSolicitudBajaDto) {
    return 'This action adds a new solicitudBaja';
  }

  findAll() {
    return `This action returns all solicitudBaja`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitudBaja`;
  }

  update(id: number, updateSolicitudBajaDto: UpdateSolicitudBajaDto) {
    return `This action updates a #${id} solicitudBaja`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitudBaja`;
  }
}
