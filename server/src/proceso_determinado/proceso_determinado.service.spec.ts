import { Test, TestingModule } from '@nestjs/testing';
import { ProcesoDeterminadoService } from './proceso_determinado.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException, ConflictException } from '@nestjs/common';

describe('ProcesoDeterminadoService', () => {
  let service: ProcesoDeterminadoService;
  let model: Model<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProcesoDeterminadoService,
        {
          provide: getModelToken('ProcesoDeterminado'),
          useValue: {
            find: jest.fn(),
            populate: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProcesoDeterminadoService>(ProcesoDeterminadoService);
    model = module.get<Model<any>>(getModelToken('ProcesoDeterminado'));
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  // Prueba para el método findAllProcesoDeterminado
  describe('findAllProcesoDeterminado', () => {
    it('debería devolver un arreglo de proceso determinado cuando existen proceso determinados', async () => {
      // Arrange
      const mockProcesoDeterminados = [
        {
          _id: 'mockedId1',
          name: 'Proceso Determinado 1',
          proceso_id: 'mockedProcesoId1',
          flujo_proceso_id: 'mockedFlujoProcesoId1',
        },
        {
          _id: 'mockedId2',
          name: 'Proceso Determinado 2',
          proceso_id: 'mockedProcesoId2',
          flujo_proceso_id: 'mockedFlujoProcesoId2',
        },
      ];

      jest.spyOn(model, 'find').mockReturnThis();
      jest.spyOn(model, 'populate').mockResolvedValueOnce(mockProcesoDeterminados);

      // Act
      const result = await service.findAllProcesoDeterminado();

      // Assert
      expect(result).toEqual(mockProcesoDeterminados);
      expect(model.find).toHaveBeenCalled();
      expect(model.populate).toHaveBeenCalledWith('proceso_id', 'name');
    });
  });

  // Prueba para el método createProcesoDeterminado
  describe('createProcesoDeterminado', () => {
    it('debería crear un nuevo proceso determinado cuando no existen conflictos', async () => {
      // Arrange
      const createProcesoDeterminadoDto = {
        name: 'Nuevo Proceso Determinado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };
      const mockProcesoDeterminado = [
        {
          _id: 'mockedId',
          ...createProcesoDeterminadoDto,
        },
      ];

      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(model, 'create').mockResolvedValueOnce(mockProcesoDeterminado);

      // Act
      const result = await service.createProcesoDeterminado(createProcesoDeterminadoDto);

      // Assert
      expect(result).toEqual(mockProcesoDeterminado);
      expect(model.findOne).toHaveBeenCalledWith({ name: createProcesoDeterminadoDto.name });
      expect(model.create).toHaveBeenCalledWith(createProcesoDeterminadoDto);
    });

    it('debería lanzar una ConflictException cuando ya existe un proceso determinado con el mismo nombre', async () => {
      // Arrange
      const createProcesoDeterminadoDto = {
        name: 'Duplicado Proceso Determinado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };

      jest.spyOn(model, 'findOne').mockResolvedValueOnce(createProcesoDeterminadoDto);

      // Act y Assert
      await expect(service.createProcesoDeterminado(createProcesoDeterminadoDto)).rejects.toThrowError(ConflictException);
      expect(model.findOne).toHaveBeenCalledWith({ name: createProcesoDeterminadoDto.name });
    });
  });

  // Prueba para el método findByIdProcesoDeterminado
  describe('findByIdProcesoDeterminado', () => {
    it('debería devolver un proceso determinado cuando se proporciona un id válido', async () => {
      // Arrange
      const mockedId = 'mockedId';
      const mockProcesoDeterminado = {
        _id: mockedId,
        name: 'Proceso Determinado Encontrado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };

      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDeterminado);

      // Act
      const result = await service.findByIdProcesoDeterminado(mockedId);

      // Assert
      expect(result).toEqual(mockProcesoDeterminado);
      expect(model.findById).toHaveBeenCalledWith(mockedId);
    });

    it('debería lanzar una NotFoundException cuando se proporciona un id no válido', async () => {
      // Arrange
      const invalidId = 'idNoValido';

      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      // Act y Assert
      await expect(service.findByIdProcesoDeterminado(invalidId)).rejects.toThrowError(NotFoundException);
      expect(model.findById).toHaveBeenCalledWith(invalidId);
    });
  });

  // Prueba para el método updateProcesoDeterminado
  describe('updateProcesoDeterminado', () => {
    it('debería actualizar y devolver un proceso determinado cuando se proporcionan datos válidos', async () => {
      // Arrange
      const mockedId = 'mockedId';
      const updateProcesoDeterminadoDto = {
        name: 'Proceso Determinado Actualizado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };
      const mockProcesoDeterminado = {
        _id: mockedId,
        name: 'Proceso Determinado Original',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };

      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValueOnce(mockProcesoDeterminado);

      // Act
      const result = await service.updateProcesoDeterminado(mockedId, updateProcesoDeterminadoDto);

      // Assert
      expect(result).toEqual(mockProcesoDeterminado);
      expect(model.findOne).toHaveBeenCalledWith({ name: updateProcesoDeterminadoDto.name });
      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(mockedId, updateProcesoDeterminadoDto);
    });

    it('debería lanzar una ConflictException al actualizar con un nombre duplicado', async () => {
      // Arrange
      const mockedId = 'mockedId';
      const updateProcesoDeterminadoDto = {
        name: 'Proceso Determinado Duplicado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };

      jest.spyOn(model, 'findOne').mockResolvedValueOnce(updateProcesoDeterminadoDto);

      // Act y Assert
      await expect(service.updateProcesoDeterminado(mockedId, updateProcesoDeterminadoDto)).rejects.toThrowError(ConflictException);
      expect(model.findOne).toHaveBeenCalledWith({ name: updateProcesoDeterminadoDto.name });
    });

    it('debería lanzar una NotFoundException cuando se proporciona un id no válido', async () => {
      // Arrange
      const invalidId = 'idNoValido';
      const updateProcesoDeterminadoDto = {
        name: 'Proceso Determinado Actualizado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };

      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);

      // Act y Assert
      await expect(service.updateProcesoDeterminado(invalidId, updateProcesoDeterminadoDto)).rejects.toThrowError(NotFoundException);
      expect(model.findOne).toHaveBeenCalledWith({ name: updateProcesoDeterminadoDto.name });
    });
  });

  // Prueba para el método removeProcesoDeterminado
  describe('removeProcesoDeterminado', () => {
    it('debería eliminar y devolver un proceso determinado cuando se proporciona un id válido', async () => {
      // Arrange
      const mockedId = 'mockedId';
      const mockProcesoDeterminado = {
        _id: mockedId,
        name: 'Proceso Determinado Eliminado',
        proceso_id: 'mockedProcesoId',
        flujo_proceso_id: 'mockedFlujoProcesoId',
      };

      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDeterminado);
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValueOnce(mockProcesoDeterminado);

      // Act
      const result = await service.removeProcesoDeterminado(mockedId);

      // Assert
      expect(result).toEqual(mockProcesoDeterminado);
      expect(model.findById).toHaveBeenCalledWith(mockedId);
      expect(model.findByIdAndDelete).toHaveBeenCalledWith(mockedId);
    });

    it('debería lanzar una NotFoundException al eliminar con un id no válido', async () => {
      // Arrange
      const invalidId = 'idNoValido';

      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      // Act y Assert
      await expect(service.removeProcesoDeterminado(invalidId)).rejects.toThrowError(NotFoundException);
      expect(model.findById).toHaveBeenCalledWith(invalidId);
    });
  });
});
