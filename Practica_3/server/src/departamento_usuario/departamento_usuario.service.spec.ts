import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentoUsuarioService } from './departamento_usuario.service';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { DepartamentoUsuario, DepartamentoUsuarioDocument } from './schema/departamento_usuario.schema';
import { NotFoundException } from '@nestjs/common';
import { UpdateDepartamentoUsuarioDto } from './dto/update-departamento_usuario.dto';

describe('DepartamentoUsuarioService', () => {
  let service: DepartamentoUsuarioService;
  let model: Model<DepartamentoUsuarioDocument>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartamentoUsuarioService,
        {
          provide: getModelToken(DepartamentoUsuario.name),
          useValue: Model, // Asegúrate de que aquí esté configurado correctamente
        },
      ],
    }).compile();

    service = module.get<DepartamentoUsuarioService>(DepartamentoUsuarioService);
    model = module.get<Model<DepartamentoUsuarioDocument>>(getModelToken(DepartamentoUsuario.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findOne', () => {
    it('should return a Document object when given a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockProcesoDet = new DepartamentoUsuario();
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDet);

      // Act
      const result = await service.findOne(mockId);

      // Assert
      expect(result).toEqual(mockProcesoDet);
    });

    it('should throw a NotFoundException when given an invalid id', async () => {
      // Arrange
      const mockId = 'invalid-id';
      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      // Act and Assert
      await expect(service.findOne(mockId)).rejects.toThrowError(NotFoundException);
    });
  });
  describe('update', () => {
    it('should update a role when provided a valid id and data', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockUpdateRoleDto: UpdateDepartamentoUsuarioDto = {
        // Provide the properties you want to update
      };
      const mockUpdatedRole = new DepartamentoUsuario(); // You can create a mock Role object here
      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValueOnce(mockUpdatedRole);

      // Act
      const result = await service.update(mockId, mockUpdateRoleDto);

      // Assert
      expect(result).toEqual(mockUpdatedRole);
    });
  });
  describe('remove', () => {
    it('should remove a role when provided a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockRemovedRole = new DepartamentoUsuario(); // You can create a mock Role object here
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValueOnce(mockRemovedRole);

      // Act
      const result = await service.remove(mockId);

      // Assert
      expect(result).toEqual(mockRemovedRole);
    });
  });
});

