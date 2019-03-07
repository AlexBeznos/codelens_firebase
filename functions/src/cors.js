const cors = require('cors')({
  origin: true
});

module.exports = {
  withCORS: (callback) => (req, res) => {
    return cors(req, res, () => callback(req, res))
  }
}
