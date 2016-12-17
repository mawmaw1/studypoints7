/**
 * Created by magnus on 04/12/2016.
 */

module.exports.jwtConfig = {
    secret: "ChangMeToARealSecretOurIWillBeHacked",
    tokenExpirationTime : 60*20, //seconds audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
}
