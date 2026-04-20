import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import mongooseToSwagger from 'mongoose-to-swagger';
import { Express } from "express";
import Role from "./models/role.model";
import User from "./models/user.model";
import { url } from "node:inspector";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User Management API",
            version: "1.0.0",
            description: "API documentation for the User and Role Management system"
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Local Development server"
            },
            {
                url: "https://your-production-url.com/api",
                description: "Production server"
            }
        ],
        components: {
            "schemas": {
                User: mongooseToSwagger(User),
                Role: mongooseToSwagger(Role)
            }
        }

    },
    apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
    app.use('/api/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
}