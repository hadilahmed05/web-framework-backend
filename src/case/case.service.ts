import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaseEntity } from './entity/case.entity';

@Injectable()
export class CaseService {
  constructor(
    @InjectRepository(CaseEntity)
    private casesRepository: Repository<CaseEntity>,
  ) {}
}
