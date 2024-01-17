import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CasesStatusEnum } from '../enums/CasesStatusEnum';
import { ClientEntity } from 'src/client/entities/client.entity';
import { LawyerEntity } from 'src/lawyer/entities/lawyer.entity';

@Entity()
export class CaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: CasesStatusEnum,
    default: CasesStatusEnum.waiting,
  })
  etat: CasesStatusEnum;
  @Column()
  todos: string;

  @ManyToOne(() => ClientEntity, (client) => client.cases)
  @JoinColumn()
  client: ClientEntity;

  @ManyToOne(() => LawyerEntity, (lawyer) => lawyer.cases)
  @JoinColumn()
  lawyer: LawyerEntity;
}
