

// title: sample handlers 
// description sample handlers 

const handler = {};

handler.sampleHandler =(requestProperties, callback)=>{
    // console.log(requestProperties)
    callback(200, {
        message:'this sample message'
    });

}

module.exports =handler;