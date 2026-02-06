import mongoose from "mongoose";
import Schemas from "../schemas/Schemas.js";
import bcrypt from 'bcryptjs'

const User = Schemas.User

const hashPassword = ((password) => {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
})

