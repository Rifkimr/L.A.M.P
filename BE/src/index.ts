import express from 'express';
import dotenv from 'dotenv';
import routes from './router'

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use("/api/v1", routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

