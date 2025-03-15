const passwordHasher = require("../config/hasher.config.js");
function encryptPassword() {
    passwordHasher.cryptPassword('12345678', (err, enc_pass) => {
        if(!err)
        console.log(enc_pass);
    });
}
encryptPassword();