import { Module } from '@nestjs/common';
import { SolicitudBajaService } from './solicitud_baja.service';
import { SolicitudBajaController } from './solicitud_baja.controller';

@Module({
  controllers: [SolicitudBajaController],
  providers: [SolicitudBajaService],
})
export class SolicitudBajaModule {}
