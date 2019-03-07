const fs = require('fs');

require.extensions['.txt'] = function(module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const javascriptTemplate = require('./javascript.txt')
const rubyTemplate = require('./ruby.txt')

module.exports = {
  javascript: javascriptTemplate,
  ruby: rubyTemplate
}
