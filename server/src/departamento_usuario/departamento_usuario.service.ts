import { Injectable } from '@nestjs/common';
import { CreateDepartamentoUsuarioDto } from './dto/create-departamento_usuario.dto';
import { UpdateDepartamentoUsuarioDto } from './dto/update-departamento_usuario.dto';

@Injectable()
export class DepartamentoUsuarioService {
  create(createDepartamentoUsuarioDto: CreateDepartamentoUsuarioDto) {
    return 'This action adds a new departamentoUsuario';
  }

  findAll() {
    return `This action returns all departamentoUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departamentoUsuario`;
  }

  update(id: number, updateDepartamentoUsuarioDto: UpdateDepartamentoUsuarioDto) {
    return `This action updates a #${id} departamentoUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamentoUsuario`;
  }
}
