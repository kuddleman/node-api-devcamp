const express = require('express')
const dotenv = require('dotenv')

// Load env consts
dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 5000
//  command to open server the first time is
  // npm run dev
app.listen( 
  PORT, 
  console.log( `Server running in ${ process.env.NODE_ENV } mode on port ${ PORT }` ) 
)                   
                               
                              
                              
          