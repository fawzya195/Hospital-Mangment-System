import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hospital Management System API",
      version: "1.0.0",
      description:
        "Complete API documentation for the Hospital Management System",
    },
    servers: [
      {
        url: "https://hospital-mangment-system-production.up.railway.app",
        description: "Production server",
      },
      {
        url: "http://localhost:4000",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        userAuth: {
          type: "apiKey",
          in: "header",
          name: "token",
          description: "Patient authentication token",
        },
        doctorAuth: {
          type: "apiKey",
          in: "header",
          name: "dtoken",
          description: "Doctor authentication token",
        },
        adminAuth: {
          type: "apiKey",
          in: "header",
          name: "atoken",
          description: "Admin authentication token",
        },
      },
    },
    tags: [
      { name: "User", description: "Patient related endpoints" },
      { name: "Doctor", description: "Doctor related endpoints" },
      { name: "Admin", description: "Admin related endpoints" },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
