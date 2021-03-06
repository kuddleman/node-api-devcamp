const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const morgan = require('morgan')

// Route files
const bootcamps = require('./routes/bootcamps')

// Load env consts
dotenv.config({ path: './config/config.env' })

const app = express()
if ( process.env.NODE_ENV === 'development' ) {
  app.use( morgan( 'dev' ) )
}


// Dev logging middleware.  Run only in dev environment


// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000
//  command to open server the first time is
  // npm run dev
app.listen( 
  PORT, 
  console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` ) 
)                   
                               
                              
                              
          