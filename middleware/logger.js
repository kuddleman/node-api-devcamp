// @desc  Logs request to console
const logger = ( req, res, next ) => {
 
  console.log(`${ req.method } ${ req.protocol }://${ req.get( 'host' )}${ req.originalUrl }`)
  // at the end, always call 'next' to tell middleware to move on:
  next()
}

module.exports = logger