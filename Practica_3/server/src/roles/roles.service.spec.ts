import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { RolesService } from './roles.service';
import { RolesDocument,Roles } from './schema/roles.schema';
import { NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

describe('RolesService', () => {
  let service: RolesService;
  let model: Model<RolesDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService,
        {
        provide: getModelToken(Roles.name),
        useValue: {
          find: jest.fn(),
          findById: jest.fn(),
          create: jest.fn(),
          findByIdAndUpdate: jest.fn(),
          findByIdAndDelete: jest.fn(),
        },
      }],
    }).compile();

    service = module.get<RolesService>(RolesService);
    model = module.get<Model<RolesDocument>>(getModelToken(Roles.name));
  });

  describe('findOne', () => {
    it('should return a Role object when given a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockProcesoDet = new Roles();
      jest.spyOn(model, 'findById').mockResolvedValueOnce(mockProcesoDet);

      //Act
      const result = await service.findOne(mockId);

      //Assert
      expect(result).toEqual(mockProcesoDet);
    });
    it('should throw a NotFoundException when given an invalid id', async () => {
      //Arrange
      const mockId = 'invalid-id';
      jest.spyOn(model, 'findById').mockResolvedValueOnce(null);

      //UnAssert
      await expect(service.findOne(mockId)).rejects.toThrowError(NotFoundException);
    });
  });
  describe('findAll', () => {
    it('should return an array of roles when roles exist', async () => {
      // Arrange
      const mockRoles = [new Roles(), new Roles()];
      jest.spyOn(model, 'find').mockResolvedValueOnce(mockRoles);

      // Act
      const result = await service.findAll();

      // Assert
      expect(result).toEqual(mockRoles);
    });
    it('should throw a NotFoundException when no roles exist', async () => {
      // Arrange
      jest.spyOn(model, 'find').mockResolvedValueOnce([]);

      // Act and Assert
      await expect(service.findAll()).rejects.toThrowError(NotFoundException);
    });
  });
  describe('create', () => {
    it('should create a role when provided valid data', async () => {
      // Arrange
      const mockCreateRoleDto: CreateRoleDto = {
        name: 'TestRole',
        // Other properties as needed for CreateRoleDto
      };
      const mockCreatedRole = new Roles(); // You can create a mock Role object here
      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(model,'create').mockResolvedValueOnce(mockCreatedRole)
      // Act
      const result = await service.create(mockCreateRoleDto);

      // Assert
      expect(result).toEqual(mockCreatedRole);
    });

    it('should throw a ConflictException when a role with the same name already exists', async () => {
      // Arrange
      const mockCreateRoleDto: CreateRoleDto = {
        name: 'ExistingRoleName', // Provide a name that already exists
        // Other properties as needed for CreateRoleDto
      };
      const existingRole = new Roles(); // You can create a mock Role object here
      jest.spyOn(model, 'findOne').mockResolvedValueOnce(existingRole);

      // Act and Assert
      await expect(service.create(mockCreateRoleDto)).rejects.toThrowError(NotFoundException);
    });
  });
  describe('update', () => {
    it('should update a role when provided a valid id and data', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockUpdateRoleDto: UpdateRoleDto = {
        // Provide the properties you want to update
      };
      const mockUpdatedRole = new Roles(); // You can create a mock Role object here
      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValueOnce(mockUpdatedRole);

      // Act
      const result = await service.update(mockId, mockUpdateRoleDto);

      // Assert
      expect(result).toEqual(mockUpdatedRole);
    });
    it('should throw a NotFoundException when provided an invalid id', async () => {
      // Arrange
      const mockId = 'invalid-id';
      const mockUpdateRoleDto: UpdateRoleDto = {
        // Provide the properties you want to update
      };
      jest.spyOn(service['rolModel'], 'findByIdAndUpdate').mockResolvedValueOnce(null);
  
      // Act and Assert
      await expect(service.update(mockId, mockUpdateRoleDto)).rejects.toThrowError(NotFoundException);
    });
  });
  describe('remove', () => {
    it('should remove a role when provided a valid id', async () => {
      // Arrange
      const mockId = 'valid-id';
      const mockRemovedRole = new Roles(); // You can create a mock Role object here
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValueOnce(mockRemovedRole);

      // Act
      const result = await service.remove(mockId);

      // Assert
      expect(result).toEqual(mockRemovedRole);
    });
    it('should throw a NotFoundException when provided an invalid id', async () => {
      // Arrange
      const mockId = 'invalid-id';
      const mockUpdateRoleDto: UpdateRoleDto = {
        // Provide the properties you want to update
      };
      jest.spyOn(service['rolModel'], 'findByIdAndUpdate').mockResolvedValueOnce(null);
  
      // Act and Assert
      await expect(service.update(mockId, mockUpdateRoleDto)).rejects.toThrowError(NotFoundException);
    });
  });
});
