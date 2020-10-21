import mongoose from 'mongoose';

export const mongoConnection = async () => {
    await mongoose.connect(process.env.DATABASE_MONGO_URL,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
};
