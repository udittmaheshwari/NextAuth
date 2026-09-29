import mongoose from "mongoose";



export async function connect(){
    try {
       mongoose.connect(process.env.MONGO_URI!);
       const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB Connected");    
        })

        connection.on('error',(err)=>{
            console.log('Please make sure mongoDB is running. '+err); 
            process.exit();   
        })


    } catch (error) {
        console.error("Something went wrong", error);
        console.log(error);
    }
}