import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlujoProcesoService } from './flujo_proceso.service';
import { CreateFlujoProcesoDto } from './dto/create-flujo_proceso.dto';
import { UpdateFlujoProcesoDto } from './dto/update-flujo_proceso.dto';

@Controller('flujo-proceso')
export class FlujoProcesoController {
  constructor(private readonly flujoProcesoService: FlujoProcesoService) {}

  @Post()
  create(@Body() createFlujoProcesoDto: CreateFlujoProcesoDto) {
    return this.flujoProcesoService.create(createFlujoProcesoDto);
  }

  @Get()
  findAll() {
    return this.flujoProcesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flujoProcesoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlujoProcesoDto: UpdateFlujoProcesoDto) {
    return this.flujoProcesoService.update(+id, updateFlujoProcesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flujoProcesoService.remove(+id);
  }
}
