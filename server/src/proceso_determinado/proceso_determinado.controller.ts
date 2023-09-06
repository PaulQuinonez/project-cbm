import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { CreateProcesoDeterminadoDto } from './dto/create-proceso_determinado.dto';
import { UpdateProcesoDeterminadoDto } from './dto/update-proceso_determinado.dto';

@Controller('proceso-determinado')
export class ProcesoDeterminadoController {
  constructor(private readonly procesoDeterminadoService: ProcesoDeterminadoService) {}

  @Post()
  create(@Body() createProcesoDeterminadoDto: CreateProcesoDeterminadoDto) {
    return this.procesoDeterminadoService.create(createProcesoDeterminadoDto);
  }

  @Get()
  findAll() {
    return this.procesoDeterminadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procesoDeterminadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcesoDeterminadoDto: UpdateProcesoDeterminadoDto) {
    return this.procesoDeterminadoService.update(+id, updateProcesoDeterminadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procesoDeterminadoService.remove(+id);
  }
}
