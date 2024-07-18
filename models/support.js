import mongoose from "mongoose";

const {Schema,model}=mongoose;

const UserSchema = new Schema({


name: {type:String, required:true},
message: {type:String, required:true},
amount: { type:Number,required:true},

})


export default mongoose.models.support || model("support",UserSchema);