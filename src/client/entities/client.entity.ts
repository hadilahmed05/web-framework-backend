import { CaseEntity } from 'src/case/entity/case.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  phoneNumber: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @OneToMany(() => CaseEntity, (caseEntity) => caseEntity.client)
  cases: CaseEntity[];
}
