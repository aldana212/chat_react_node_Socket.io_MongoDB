import models from "../models/userModel.js"
import { saveEncrypt } from '../helpers/helpers.js'


import Boom from '@hapi/boom'


class clientes_servicio {

    async CraeteUser( {username, email, password} ) {
        console.log(username, email, password);
        const usernameCheck = await models.findOne({ username });
        if (usernameCheck)
        return (Boom.badRequest("Username already used"));
        const emailCheck = await models.findOne({ email })
        if (emailCheck)
        return (Boom.badRequest("Email already used"));
        const hashedPassword = await saveEncrypt(password)
        console.log(hashedPassword);
        try {   
        const user = await models.create({
                email,
                username,
                password: hashedPassword,
            })
            const userRegister = user.save();
            return userRegister;
        } catch (error) {
            return (error.message);
        }

    }


    async setAvatar(userId, avatarImage){
        try {

            const userData = await models.findByIdAndUpdate(userId,{
                isAvatarImageSet: true,
                avatarImage,
            })    
            return userData;
            
        } catch (error) {
            console.log(error.message);
        }
    }
}

export {
    clientes_servicio
};