import mongoose from 'mongoose';

const { Schema } = mongoose;

const conversationSchema = new Schema({
    roomateIds: [Schema.Types.ObjectId],
    latestMessage: String,
    latestAuthor: Schema.Types.ObjectId,
}, {
    timestamps: true,
});

export const Conversation = mongoose.model('conversations', conversationSchema);
