import { IJwt } from './../interfaces/jwt.interface';
import { SECRET_KEY, MESSAGES, EXPIRETIME } from './../config/constants';
import jwt from 'jsonwebtoken';



class JWT {
    private secretKey = SECRET_KEY as string;
    // Información del payload con fecha de caducidad 24 horas por defecto
    sign(data: IJwt, expiresIn: number = EXPIRETIME.H24 ){
        return jwt.sign(
            { user: data.user },
            this.secretKey,
            { expiresIn } // 24 horas de caducidad

        );
    }

    verify(token: string){
        try{
            return jwt.verify(token, this.secretKey);
        }catch(e){
            return MESSAGES.TOKEN_VERIKATION_FAILED;
        }
    }
}
export default JWT;