import bcrypt from "bcrypt";
const saltRounds = 10;


async function saveEncrypt (password){
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
}

export {
    saveEncrypt
}
