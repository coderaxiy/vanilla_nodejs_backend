function validationError(res) {
    res.writeHead(400, {
        'Content-type': 'application/json'
    })

    const resp = {
        success: false,
        message:'Bad Request'
    }

    res.end(JSON.stringify(resp))
}

module.exports = validationError

