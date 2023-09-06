import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcesoService } from './proceso.service';
import { CreateProcesoDto } from './dto/create-proceso.dto';
import { UpdateProcesoDto } from './dto/update-proceso.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('proceso')
@Controller('proceso')
export class ProcesoController {
  constructor(private readonly procesoService: ProcesoService) {}

  @Post()
  create(@Body() createProcesoDto: CreateProcesoDto) {
    return this.procesoService.create(createProcesoDto);
  }

  @Get()
  findAll() {
    return this.procesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procesoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcesoDto: UpdateProcesoDto) {
    return this.procesoService.update(id, updateProcesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procesoService.remove(id);
  }
}
