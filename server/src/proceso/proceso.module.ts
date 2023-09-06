import { Module } from '@nestjs/common';
import { ProcesoService } from './proceso.service';
import { ProcesoController } from './proceso.controller';

@Module({
  controllers: [ProcesoController],
  providers: [ProcesoService],
})
export class ProcesoModule {}
