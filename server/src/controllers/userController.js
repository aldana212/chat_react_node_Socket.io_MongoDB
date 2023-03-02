import { clientes_servicio } from "../services/userServices.js"
const services = new clientes_servicio();

class controlador_clientes{
   
    async createControllerUser(req, res){
        const data = req.body;
        let clientes = services.CraeteUser(data)
        clientes.then(responde =>{
            console.log("eeee");
            console.log(responde);
        }).catch(error =>{
            console.log("errror");
            console.log(error.message);
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