import { Body, Controller, Post } from '@nestjs/common';
import { LawyerAuthService } from './lawyer-auth.service';
import { SignUpDto } from './dtos/signup.dto';
import { SignInDto } from './dtos/signin.dto';

@Controller('lawyer-auth')
export class LawyerAuthController {
  constructor(private mylawyerAuthService: LawyerAuthService) {}

  @Post('signup')
  register(@Body() credentials: SignUpDto): any {
    return this.mylawyerAuthService.signup(credentials);
  }

  @Post('signin')
  signIn(@Body() credentials: SignInDto) {
    return this.mylawyerAuthService.signin(credentials);
  }
}
