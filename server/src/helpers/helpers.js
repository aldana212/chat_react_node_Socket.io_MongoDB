import bcrypt from "bcrypt";
const saltRounds = 10;


async function saveEncrypt (){
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
}



export {
    saveEncrypt
}
