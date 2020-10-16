if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ConfigureStore.production.js');
} else {
  module.exports = require('./ConfigureStore.development.js');
}
