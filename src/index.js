const express = require('express');

require('express-async-errors');

const routes = require('./routes');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('node:fs');

const app = express();

app.use(express.json());

app.use(routes);

let cachedSpec = null;

const getOpenAPISpec = () => {
  const isDev = process.env.NODE_ENV !== 'production';
  if(!isDev && cachedSpec) return cachedSpec;
  const raw = fs.readFileSync('./openapi.yaml', 'utf8');
  cachedSpec = YAML.parse(raw);
  return cachedSpec;
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
  customSiteTitle: 'Contacts API Docs',
  swaggerOptions: {
    spec: getOpenAPISpec()
  }
}));

app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000 🔥'));
