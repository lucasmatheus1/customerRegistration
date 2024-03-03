import 'dotenv/config';

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'http://localhost';

export default {
  port,
  host
};