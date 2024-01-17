import { PickType } from '@nestjs/mapped-types';
import { AppointmentDto } from './appointment.dto';

export class UpdateAppointmentDTO extends PickType(AppointmentDto, [
  'status',
  'description',
  'todos',
  'date',
]) {}
