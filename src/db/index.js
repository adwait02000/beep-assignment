import { connect } from 'mongoose';
const connectionString = 'mongodb+srv://adwait:Ganpati_12@beep-api.9bvdd.mongodb.net/beepdb?retryWrites=true&w=majority&appName=beep-api';

const connectDB = async () => {
    try {
        // Connect to MongoDB using Mongoose
        await connect(connectionString, {
        });
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1); // Exit the process with failure
    }
};
export default connectDB