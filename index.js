// title: api projects
// description: a restful api for monitoring 

// dependencies 
const http = require('http')
const url = require('url')
const {StringDecoder} = require('string_decoder')
const {handleReqRes} = require('./helpers/handleReqRes')
// module scafolding 

let app ={}


// configuration 
app.config ={
    port: 3000
}


// create server 
app.createServer=()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log("server is running on ", app.config.port)
    })
}

// handle req res 
app.handleReqRes= handleReqRes;

// starting the server 
app.createServer()