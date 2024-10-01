import mongoose from 'mongoose';

const Connection = async () => {
    const MONGO_URI = 'mongodb+srv://pranavpandey2309:JMiwXHLOW7u8FOSe@cluster0.r5fa3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;
