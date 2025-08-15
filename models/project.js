import mongoose from "mongoose";

const projectSchema= new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    screenshot: String,
    tech: [String]
});

export default mongoose.model('Project', projectSchema);