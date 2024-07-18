import mongoose from "mongoose";

const {Schema,model}=mongoose;

const UserSchema = new Schema({
phone: { type:Number,required:true},

work: {type:String, required:true},
paymentlink: {type:String, required:true},

})


export default mongoose.models.Userdetail || model("Userdetail",UserSchema);