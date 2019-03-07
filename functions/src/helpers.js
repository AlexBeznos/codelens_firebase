const { httpWithSentry } = require('./sentry');
const { withCORS } = require('./cors');

const onRequest = (callback) => {
  return withCORS(httpWithSentry(callback))
}

module.exports = {
  onRequest
}
