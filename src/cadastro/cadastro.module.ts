import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroResolver } from './cadastro.resolver';

@Module({
  providers: [CadastroService, CadastroResolver]
})
export class CadastroModule {}
