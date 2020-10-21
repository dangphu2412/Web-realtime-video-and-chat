import mongoose from 'mongoose';
import { bcryptService } from '../plugin';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: '',
    },
});

userSchema.pre('save', function prehookSave(next) {
    const user = this;
    try {
        user.password = bcryptService.hashSync(user.password);
        return next();
    } catch (error) {
        return next(error);
    }
});

export const User = mongoose.model('user', userSchema);
