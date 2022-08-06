import mongoose from 'mongoose';
// const { Schema } = mongoose; we don't need that because we are using  mongoose.Schema at line no 4

const GrocerySchema = new mongoose.Schema({
    groceryItems:{
        type: String,
        required: true,
    },
    isPurchased:{
        type: Boolean,
    }
})


export default mongoose.model("Grocery",GrocerySchema)

// here is grocery in line no 16 is a model Name