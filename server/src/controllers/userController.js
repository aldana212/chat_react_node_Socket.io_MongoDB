import { clientes_servicio } from "../services/userServices.js"
const services = new clientes_servicio();

class controlador_clientes{
   
    async createControllerUser(req, res){
        const data = req.body;
        let clientes = services.CraeteUser(data)
        clientes.then(responde =>{
            if (responde.isBoom === true) {
                res.status(500).json({msg: responde.output.payload.message, status: false})
            }else{
                res.status(200).json({ data: responde, msg: "exito", status: true})
            }
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json({ msg: error.message })
        })
    }

    async setAvatars(req, res){
        const userId = req.params.id
        const avatarImage =  req.body.Image;
        const avatar = services.setAvatar(userId, avatarImage)
        avatar.then((responde) =>{
            res.status(200).json({  isSet: responde.isAvatarImageSet, image: responde.avatarImage,})
        }).catch((err) =>{
            console.log(err);
        })
    }
}





// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
//         if (!user)
//             return res.json({ msg: "Incorrect Username or Password", status: false });
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid)
//             return res.json({ msg: "Incorrect Username or Password", status: false });
//         delete user.password;
//         return res.json({ status: true, user });
//     } catch (error) {
//         console.log(error.message);
//     }

// }

// const register = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const usernameCheck = await User.findOne({ username })
//         if (usernameCheck)
//             return res.json({ msg: "Nombre de usuario ya utilizado", status: false });
//         const emailCheck = await User.findOne({ email });
//         if (emailCheck)
//             return res.json({ msg: "Email already used", status: false });
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await User.create({
//             email,
//             username,
//             password: hashedPassword,
//         });
//         delete user.password;
//         return res.status(200).json({ msg:"registrado", data: user });
//     } catch (error) {
//         console.log(error.message);
//     }
// }


export {
    controlador_clientes
}