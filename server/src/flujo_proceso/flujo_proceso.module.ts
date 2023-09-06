import { Module } from '@nestjs/common';
import { FlujoProcesoService } from './flujo_proceso.service';
import { FlujoProcesoController } from './flujo_proceso.controller';

@Module({
  controllers: [FlujoProcesoController],
  providers: [FlujoProcesoService],
})
export class FlujoProcesoModule {}
