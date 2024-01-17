import { Injectable } from '@nestjs/common';
import { LawyerEntity } from './entities/lawyer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LawyerService {
  constructor(private repository: Repository<LawyerEntity>) {}
}
