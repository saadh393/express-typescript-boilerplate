import app from './app';
import config from '~/configs/_index';

app.listen(config.ENV.PORT, () => {
  console.log(`The Server is Running on - http://localhost:${config.ENV.PORT}`);
});
