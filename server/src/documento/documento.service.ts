import { Injectable } from '@nestjs/common';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Documento, DocumentoDocument } from './schema/documento.schema';

@Injectable()
export class DocumentoService {
  constructor(
    @InjectModel(Documento.name) private DocumentoModel: Model<DocumentoDocument>
  ){}
  async create(createDocumentoDto: CreateDocumentoDto) {
    const documentoCreated = await this.DocumentoModel.create(createDocumentoDto)
    return documentoCreated;
  }

  async findAll() {
    const documentoFindAll = await this.DocumentoModel.find({})
    return documentoFindAll;
  }

  async findOne(id: number) {
    const documentoFindID = await this.DocumentoModel.findById(id)
    return documentoFindID;
  }

  async update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
    const actualizarDocumento = await this.DocumentoModel.findByIdAndUpdate(id, UpdateDocumentoDto)
    return actualizarDocumento;
  }

  async remove(id: number) {
    const documenmtoRemove = await this.DocumentoModel.findByIdAndDelete(id)
    return documenmtoRemove;
  }
}
