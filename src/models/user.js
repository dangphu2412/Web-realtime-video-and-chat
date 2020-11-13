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
        default: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
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

userSchema.index({ email: 'text' });

export const User = mongoose.model('user', userSchema);
