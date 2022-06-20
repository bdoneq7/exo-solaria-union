import mongoose from "mongoose";
const { Schema } = mongoose;

const StarSystemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    
});

export default mongoose.model("StarSystem", StarSystemSchema);