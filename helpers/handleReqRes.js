// title: handle request response 
// description: handle request response 

// dependencies 
const {StringDecoder} = require('string_decoder')
const url = require('url')
const routes = require('./routes')
const {notFoundHandler} = require('./handlers/routesHanlders/notFoundHandlers')


// module scafolding 
const handler = {}

handler.handleReqRes = (req, res) =>{
    // request handle 
    // get the url and parsed it 
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const trimmedPath= path.replace(/^\/+|\/+$/g, '')
    const queryStringObject = parsedUrl.query

    //request method
    const method = req.method.toLowerCase()

    // request header 
    const headerObject = req.headers

    // all request properties 
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject
    }

    // request body 
    const decoder= new StringDecoder('utf-8')             //  for buffer decodation 
    let realData= '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;


    
    chosenHandler(requestProperties, (statusCode, payload) =>{
        statusCode= typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload :{};
        // console.log(payload, statusCode)

        let payloadString = JSON.stringify(payload)
        console.log(payloadString)
        res.writeHead(statusCode)
        res.end(payloadString)
    })
    
    req.on('data', (buffer) =>{
        realData += decoder.write(buffer);
    })
    req.on('end', ()=>{
        realData += decoder.end()
        res.end("right3434")
    })

    
}


module.exports = handler