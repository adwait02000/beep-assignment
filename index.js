
import express from 'express';
import bodyParser from 'express'
import { errorHandler } from './src/middlewares/error.middleware.js';
import taskRoutes from './src/routes/task.routes.js';
import userRoutes from './src/routes/user.routes.js';
import commentRoutes from './src/routes/comment.routes.js';

import connectDB from './src/db/index.js';
import { errorLogger, requestLogger } from './src/middlewares/logger.middleware.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/swagger/swagger.json' assert {type: 'json'}


const app = express();
const PORT = 5000


app.use(bodyParser.json());

app.use(requestLogger);



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/users', userRoutes);
app.use('/tasks', taskRoutes)
app.use('/comments', commentRoutes);

app.use(errorLogger);

app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected.');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (e) {
        console.error('Error starting the server:', e);
    }
};

startServer()