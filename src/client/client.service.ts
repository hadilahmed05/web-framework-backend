import { Injectable } from '@nestjs/common';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(private repository: Repository<ClientEntity>) {}
}
