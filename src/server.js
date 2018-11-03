import http from 'http';
import express from 'express';
import morgan from 'morgan';
import github from './routes/github';
import config from '../config.json';

let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use('/github', github());

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;