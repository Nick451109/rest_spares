const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_persona.js']

swaggerAutogen(outputFile, endpointsFiles)