import bcrypt from 'bcrypt';

export const hashedPass = async(password) =>{
    try{
     const SaltNum = 10;   
     const hashPassword = await bcrypt.hash(password ,SaltNum)
     return hashPassword;
    }catch(e){
        console.log(e)
    }
}

export const comparePassword = async (password,hashPassword) =>{
   try{

    const comPass = await bcrypt.compare(password,hashPassword);
    return comPass;

   }catch(e){
    console.log(e)
   }
}
