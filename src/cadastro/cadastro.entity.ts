import { Field, InputType, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Cadastro {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cotaId: number;

  @Field(() => Int)
  numeroCota: number;

  @Field({ nullable: true })
  nomeUsuario?: string;

  @Field({ nullable: true })
  contato?: string;

  @Field({ nullable: true })
  parcelamento?: string;
}

@InputType()
export class CreateCadastroInput {
  @Field(() => Int)
  cotaId: number;

  @Field(() => Int)
  numeroCota: number;

  @Field({ nullable: true })
  nomeUsuario?: string;

  @Field({ nullable: true })
  contato?: string;

  @Field({ nullable: true })
  parcelamento?: string;

  @Field({ nullable: true })
  dataCadastro?: Date;
}

@InputType()
export class UpdateCadastroInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  cotaId: number;

  @Field(() => Int)
  numeroCota: number;

  @Field({ nullable: true })
  nomeUsuario?: string;

  @Field({ nullable: true })
  contato?: string;

  @Field({ nullable: true })
  parcelamento?: string;
}
