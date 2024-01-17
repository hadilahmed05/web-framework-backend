import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientModule } from './client/client.module';
import { LawyerModule } from './lawyer/lawyer.module';
import { AppointmentModule } from './appointment/appointment.module';
import { CaseModule } from './case/case.module';
import { ClientAuthModule } from './client-auth/client-auth.module';
import { LawyerAuthModule } from './lawyer-auth/lawyer-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClientModule,
    LawyerModule,
    AppointmentModule,
    CaseModule,
    ClientAuthModule,
    LawyerAuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'WebFrameWorkDB',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
