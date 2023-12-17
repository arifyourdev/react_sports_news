import mongoose from "mongoose";
import colors  from "colors";

const connDB = async () =>{
     try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Server`.bgMagenta.white)

     }catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
     }
}

export default connDB;
