
module.exports = (app) => {

  app.use('/api', require('./list.routes'));

  }