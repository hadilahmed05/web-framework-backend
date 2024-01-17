import { Controller, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
@UseGuards(AuthGuard('jwt-client'))
export class ClientController {
  // Dependency Injection
  constructor(private MyClientService: ClientService) {}
}
