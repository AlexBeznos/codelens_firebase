const Sentry = require('@sentry/node');
Sentry.init({dsn: 'https://21eac94321534e2dbf324fd345a00535@sentry.io/1408656'});
 
const httpWithSentry = (callback) => {
  return (req, res) => {
    try {
      return callback(req, res);
    } catch (err) {
      Sentry.captureException(err);
      res.status(422).send({ error: 'something went wrong' })
    }
  }
}

const eventWithSentry = (callback) => {
  return (event) => {
    try {
      return callback(event);
    } catch (err) {
      Sentry.captureException(err);
    }
  }
}

module.exports = {
  httpWithSentry,
  eventWithSentry
}
