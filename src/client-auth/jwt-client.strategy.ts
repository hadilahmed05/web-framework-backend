import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { PayloadDto } from './dtos/payload.dto';

@Injectable()
export class JwtClientStrategy extends PassportStrategy(
  Strategy,
  'jwt-client',
) {
  constructor(
    @InjectRepository(ClientEntity)
    private ClientRepository: Repository<ClientEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: PayloadDto) {
    const user = this.ClientRepository.findOneBy({ email: payload.email });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
