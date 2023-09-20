import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Roles, RolesDocument } from './schema/roles.schema';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles.name) private rolModel: Model<RolesDocument>
  ){}
  async create(createRoleDto: CreateRoleDto) {
    const { name } = createRoleDto;
    const existingRole = await this.rolModel.findOne({ name });
    if (existingRole) {
      throw new ConflictException('El rol ya existe.');
    }
    const rolCreated = await this.rolModel.create(createRoleDto)
    return rolCreated;
  }

  async findAll() {
    const rolFindAll = await this.rolModel.find({})
    return rolFindAll;
  }

  async findOne(id: string) {
    const rolFindID = await this.rolModel.findById(id)
    return rolFindID;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const actualizarRol = await this.rolModel.findByIdAndUpdate(id, updateRoleDto)
    return actualizarRol;
  }

  async remove(id: string) {
    const rolRemove = await this.rolModel.findByIdAndDelete(id)
    return rolRemove;
  }
}
