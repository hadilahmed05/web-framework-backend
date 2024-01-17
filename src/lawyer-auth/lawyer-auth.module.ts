import { Module } from '@nestjs/common';
import { LawyerAuthService } from './lawyer-auth.service';
import { LawyerAuthController } from './lawyer-auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawyerEntity } from 'src/lawyer/entities/lawyer.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: 3600 },
    }),
    TypeOrmModule.forFeature([LawyerEntity]),
  ],
  providers: [LawyerAuthService],
  controllers: [LawyerAuthController],
})
export class LawyerAuthModule {}
