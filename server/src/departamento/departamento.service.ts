import { ConflictException, Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento, DepartamentoDocument } from './schema/departamento.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectModel(Departamento.name) private DepartamentoModel: Model<DepartamentoDocument>
  ){}
  async create(createDepartamentoDto: CreateDepartamentoDto) {
    const { name } = createDepartamentoDto;
    const existingdepartamento = await this.DepartamentoModel.findOne({ name });
    if (existingdepartamento) {
      throw new ConflictException('El tipo de flujo de proceso ya existe.');
    }
    const departamentoCreated = await this.DepartamentoModel.create(createDepartamentoDto)
    return departamentoCreated;
  }

  async findAll() {
    const departamentoFindAll = await this.DepartamentoModel.find({})
    return departamentoFindAll;
  }

  async findOne(id: number) {
    const departamentoFindID = await this.DepartamentoModel.findById(id)
    return departamentoFindID;
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    const actualizardepartamento = await this.DepartamentoModel.findByIdAndUpdate(id, updateDepartamentoDto)
    return actualizardepartamento;
  }

  async remove(id: number) {
    const departamentoRemove = await this.DepartamentoModel.findByIdAndDelete(id)
    return departamentoRemove;
  }
}
