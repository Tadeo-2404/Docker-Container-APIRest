import express, { json } from 'express';
import router from './routes/routes.js';
const app = express();
app.use(json());
const port = 3000 || process.env.PORT;

app.use('/', router);

app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}`);
});