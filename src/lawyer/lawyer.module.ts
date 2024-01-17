import { Module } from '@nestjs/common';
import { LawyerController } from './lawyer.controller';
import { LawyerService } from './lawyer.service';
import { LawyerEntity } from './entities/lawyer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LawyerEntity])],
  controllers: [LawyerController],
  providers: [LawyerService],
})
export class LawyerModule {}
