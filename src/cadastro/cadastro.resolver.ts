import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { api } from 'src/utils/api.service'; 
import { CreateCadastroInput, Cadastro, UpdateCadastroInput } from './cadastro.entity'; 

@Resolver(() => Cadastro)
export class CadastroResolver {
  constructor() {}

  @Query(() => [Cadastro])
  async cadastros() {
    const response = await api.get('/cadastros'); 
    return response.data;  
  }

  @Query(() => Cadastro)
  async cadastro(@Args('id', { type: () => Int }) id: number) {
    const response = await api.get(`/cadastros/${id}`);  
    return response.data; 
  }

  @Mutation(() => Cadastro)
  async createCadastro(@Args('data') data: CreateCadastroInput) {
    const response = await api.post('/cadastros', data); 
    return response.data; 
  }

  @Mutation(() => Cadastro)
  async updateCadastro(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateCadastroInput
  ) {
    const response = await api.put(`/cadastros/${id}`, data);  
    return response.data;  
  }

  @Mutation(() => Boolean)
  async deleteCadastro(@Args('id', { type: () => Int }) id: number) {
    await api.delete(`/cadastros/${id}`);  
    return true; 
  }
}
