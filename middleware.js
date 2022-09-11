function Authenticate(req, res, next) {
    let haveAnAuthToken = req.headers["x-auth-token"] !== undefined
    let tokenIsValid = req.headers["x-auth-token"] === process.env.AUTH_TOKEN

    if (!haveAnAuthToken || !tokenIsValid) {
        res.status(401)
        res.json({msg: "You are not authorized"})
    }
    else {
        next()
    }
}

module.exports = { Authenticate: Authenticate  }