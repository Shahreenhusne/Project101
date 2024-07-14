import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://FoodAppProject:ziadd9h4ORRBWntB@cluster0.hyg2bw7.mongodb.net/FoodApp').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.