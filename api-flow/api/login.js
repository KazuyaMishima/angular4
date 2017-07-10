const security = require('./../security/security.js');
module.exports = (app, ruta) => {
    app.route(ruta)
        .post((req, res) => {
            let credential = req.body
            if (security.isValidUser(credential)) {
                console.log(`accepted: ${credential.email}`)
                res.status(201).json(security.getNewToken(credential));
            } else {
                console.log(`Invalid credential: ${JSON.stringify(result)}`)
                res.status(401).send('Invalid credential');
            }
        })
}