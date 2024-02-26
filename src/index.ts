import 'dotenv/config';
import env from './config';
import app from './app';

app.listen(env.port, () => {
  console.log('Server started:', `${env.host}:${env.port}`);
});