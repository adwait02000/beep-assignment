import { connect } from 'mongoose';
import { config } from 'dotenv';
config()
const connectionString = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await connect(connectionString, {
        });
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};
export default connectDB