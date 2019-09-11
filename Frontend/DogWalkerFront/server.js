import express, { static } from 'express';
import { join } from 'path';
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(static(`$/dist/$`));
 
app.get('/*', (_req, res) => {
res.sendFile(join(`$/dist/$/index.html`));
});
 
app.listen(process.env.PORT || 8080);