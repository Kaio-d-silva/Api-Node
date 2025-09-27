import User from "../../models/user-model";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { ENV } from "../../config/env";

export class LoginService {
    async login({ email, senha }: { email: string; senha: string }): Promise<null | number> {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return null;
        }

        const senhaEhValida = await bcrypt.compare(senha, user.senha);
        if (!senhaEhValida) {
            return null;
        }

        return user.id;
    }

    gerarTokens(user: User) {
    const accessTokenOptions: SignOptions = {
      expiresIn: (ENV.JWT_EXPIRES_IN as SignOptions['expiresIn']) || '15m',
    };
    const refreshTokenOptions: SignOptions = {
      expiresIn: (ENV.JWT_REFRESH_EXPIRES_IN as SignOptions['expiresIn']) || '7d',
    };
    const token = jwt.sign(
      { id: user.id, email: user.email },
      ENV.JWT_SECRET || 'default_secret',
      accessTokenOptions
    );
    const refreshToken = jwt.sign(
      { id: user.id },
      ENV.JWT_REFRESH_SECRET || 'default_refresh_secret',
      refreshTokenOptions
    );
    return { token, refreshToken };
  }
}