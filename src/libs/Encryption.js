let CryptoJS = require('crypto-js')
let key = "base64:CGuWpPMFnYwv9e9EXIM1cGiJQjDi0HJJPMXjdDRQ4Vg=";
var iv = CryptoJS.lib.WordArray.random(128/8);

let encryption = {
    encrypt: (value) => {
        return new Promise((resolve, reject) => {
            try {
                let cipher = CryptoJS.AES.encrypt(String(value), key, {iv: iv});
                resolve(cipher.toString())
            } catch(e) {
                reject(e);
            }
        });
    },
    decrypt: (value) => {
        return new Promise((resolve, reject) => {
            try {
                let bytes = CryptoJS.AES.decrypt(value, key);
                resolve(bytes.toString(CryptoJS.enc.Utf8));
            } catch(e) {
                reject(e)
            }
        });
    },
    encryptObject: (value) => {
        if(value !== undefined) return CryptoJS.AES.encrypt(JSON.stringify(value), key).toString()
    },
    decryptObject: (value) => {
        return new Promise((resolve, reject) => {
            try {
                let bytes = CryptoJS.AES.decrypt(value, key);
                let text_string = bytes.toString(CryptoJS.enc.Utf8);
                resolve(JSON.parse(text_string))
            } catch (e) {
                reject(e)
            }
        })
    }
};

export default encryption

