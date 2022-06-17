

// title: not found handlers 
// description: not found handlers 

const handler = {};

handler.notFoundHandler =(requestProperties, callback)=>{
    callback(404, {
        message: 'your url not found'
    })
}

module.exports =handler;