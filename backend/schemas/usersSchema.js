import mongoose from "mongoose";

const usersSchemas = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    email: String,
    password: String,
    username: String,
    isActive: Boolean,
    isPinned: Boolean
})

export const Users = mongoose.model("Users", usersSchemas)