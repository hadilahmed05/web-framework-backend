import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { CasesStatusEnum } from '../enums/CasesStatusEnum';

export class CasesDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEnum(CasesStatusEnum)
  @IsNotEmpty()
  etat: CasesStatusEnum;
  @IsNotEmpty()
  description: string;
  @IsOptional()
  todos: string[];
}
