import express from "express";
import bodyParser from "body-parser";

import router from "./routes.js";
import VideoController from './video/VideoController.js'

const app = express();
const port = 8282;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('frontend'));
app.set('view engine', 'ejs');

app
    .use('/', router)
    .use('/', VideoController);

app.listen(port, () => {
    console.log('Servidor aberto em http://localhost:' + port);
});