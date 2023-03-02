import models from "../models/userModel.js"
import { saveEncrypt } from '../helpers/helpers.js'


class clientes_servicio {

    async CraeteUser( {username, email, password} ) {
        try {
            // console.log(username, email, password);
            const usernameCheck = models.findOne({ username })
            console.log(usernameCheck);
            if (usernameCheck)
            throw new Error('Nombre de usuario ya utilizado');
            const emailCheck = models.findOne({ email })
            // console.log(emailCheck);
            if (emailCheck)
            return new Error("Email already used");
            const hashedPassword = await saveEncrypt(password)
            console.log(hashedPassword);
            const user = await models.create({
                email,
                username,
                password: hashedPassword,
            })
            delete user.password;
            return user;
        } catch (error) {
            return new Error(error.message);
        }

    }
}

export {
    clientes_servicio
};