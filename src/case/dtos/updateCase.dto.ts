import { CasesDto } from './cases.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCaseDto extends PartialType(CasesDto) {}
