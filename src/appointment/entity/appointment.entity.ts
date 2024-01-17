import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;
}
