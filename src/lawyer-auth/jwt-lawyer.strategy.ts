import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LawyerEntity } from '../lawyer/entities/lawyer.entity';
import { PayloadDto } from './dtos/payload.dto';

@Injectable()
export class JwtClientStrategy extends PassportStrategy(
  Strategy,
  'jwt-lawyer',
) {
  constructor(
    @InjectRepository(LawyerEntity)
    private LawyerRepository: Repository<LawyerEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: PayloadDto) {
    const user = this.LawyerRepository.findOneBy({ email: payload.email });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
