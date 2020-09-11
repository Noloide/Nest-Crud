import { ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { UsersController } from '../users/users.controller';

/*@Injectable()
export class Strategy extends JwtStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validate(username: string, password: string): Promise<any> {
    const JwtStrategy = require('passport-jwt').Strategy;
    let opts = {jwtFromRequest: JwtStrategy}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    passport.use(
      new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOneUser({ id: jwt_payload.sub }, function(err, user) {
          if (err) {
            return done(err, false);
          }
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
            // or you could create a new account
          }
        });
      })
    );
    }
}
*/
