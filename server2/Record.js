import mongoose from "mongoose";

const Record = new mongoose.Schema({
    record: {type: String, required: true}
});

export default mongoose.model('Record', Record);