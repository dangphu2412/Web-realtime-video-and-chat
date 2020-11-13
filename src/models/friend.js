import mongoose from 'mongoose';

const { Schema } = mongoose;

const friendSchema = new Schema({
});

export const Friend = mongoose.model('friend', friendSchema);
