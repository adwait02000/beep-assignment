import users from './users.json' assert { type: 'json' }
import tasks from './tasks.json' assert { type: 'json' }
import comments from './comments.json' assert { type: 'json' }

const baseSwagger = {
    openapi: '3.0.0',
    info: {
        title: 'Task API Documentation',
        version: '1.0.0',
    },
    paths: {},
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {}
    },
    security: [{ bearerAuth: [] }],
};

const swaggerSpec = {
    ...baseSwagger,
    paths: {
        ...users.paths,
        ...tasks.paths,
        ...comments.paths,
    },

    components: {
        ...baseSwagger.components,
        securitySchemes: {
            ...baseSwagger.components.securitySchemes,
            ...(users.components?.securitySchemes || {}),
            ...(tasks.components?.securitySchemes || {}),
            ...(comments.components?.securitySchemes || {}),
        },
    },

    schemas: {
        ...baseSwagger.components.schemas,
        ...(users.components?.schemas || {}),
        ...(tasks.components?.schemas || {}),
        ...(comments.components?.schemas || {}),
    }
};

console.log(users.components);

export default swaggerSpec;
