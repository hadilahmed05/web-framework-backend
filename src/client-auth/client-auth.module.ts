import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { ClientAuthService } from './client-auth.service';
import { JwtClientStrategy } from './jwt-client.strategy';
import { ClientEntity } from 'src/client/entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientAuthController } from './client-auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: 3600 },
    }),
    TypeOrmModule.forFeature([ClientEntity]),
  ],
  providers: [ClientAuthService, JwtClientStrategy],
  controllers: [ClientAuthController],
})
export class ClientAuthModule {}
