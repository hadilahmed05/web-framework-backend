import { Body, Controller, Post } from '@nestjs/common';
import { ClientAuthService } from './client-auth.service';
import { SignUpDto } from './dtos/signup.dto';
import { SignInDto } from './dtos/signin.dto';

@Controller('client-auth')
export class ClientAuthController {
  constructor(private myClientAuthService: ClientAuthService) {}

  @Post('signup')
  register(@Body() credentials: SignUpDto): any {
    return this.myClientAuthService.signup(credentials);
  }

  @Post('signin')
  signIn(@Body() credentials: SignInDto) {
    return this.myClientAuthService.signin(credentials);
  }
}
