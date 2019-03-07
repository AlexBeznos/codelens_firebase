const Sentry = require('@sentry/node');
Sentry.init({dsn: 'https://f15d685905b84396aa23c985a709f8a5@sentry.io/1354328'});
 
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
