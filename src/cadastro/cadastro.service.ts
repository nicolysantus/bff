import { Injectable } from '@nestjs/common';
import { CreateCadastroInput, UpdateCadastroInput } from './cadastro.entity';
import { api } from 'src/utils/api.service';

@Injectable()
export class CadastroService {
  constructor() { }

  async findAll() {
    const response = await api.get('/cadastros');
    return response.data;
  }

  async findOne(id: number) {
    const response = await api.get(`/cadastros/${id}`);
    return response.data;
  }

  async create(data: CreateCadastroInput) {
    const response = await api.post('/cadastros', data);
    return response.data;
  }

  async update(id: number, data: UpdateCadastroInput) {
    const response = await api.put(`/cadastros/${id}`, data);
    return response.data;
  }

  async remove(id: number) {
    await api.delete(`/cadastros/${id}`);
    return true;
  }
}
