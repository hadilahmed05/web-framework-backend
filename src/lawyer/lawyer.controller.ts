import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('lawyer')
@UseGuards(AuthGuard('jwt-client'))
export class LawyerController {}
