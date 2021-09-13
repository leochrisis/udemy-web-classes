exports.handler = function(event, context, callback) {
    const clientArea = `
    <h3> Welcome to the client area</h3>
    <p>Here you can access all <strong>logged client</strong> benefits</p>
    `
    
    let body

    if(event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if(body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: clientArea
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }
}