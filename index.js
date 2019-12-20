const app = require('./server/config/express');
const config = require('./server/config/env');

app.listen(config.portApi, () => {
  console.log(
    `API Server started and listening on port ${config.portApi} (${config.env})`
  );
});

module.exports = app;