//var config = require('./../config/main.json');
//var iv = config.password_encryption_iv;
var service = {};
var Q = require('q');
//var cryptoLib = require('cryptlib');
service._encrypt = encryption;
service._decrypt = decryption;

module.exports = service;

/**
 * Function to encrypt string
 */
function encryption(data, key)
{
	var shaKey = cryptoLib.getHashSha256(key, 32); // This line is not needed on Android or iOS. Its already built into CryptLib.m and CryptLib.java
    var encryptedString = cryptoLib.encrypt(data, shaKey, iv);
    return encryptedString;
}

/**
 * Function to decrypt string
 */
function decryption(data, key)
{
	var shaKey = cryptoLib.getHashSha256(key, 32); // This line is not needed on Android or iOS. Its already built into CryptLib.m and CryptLib.java
	var decryptedString = cryptoLib.decrypt(data, shaKey, iv);
	//console.log('decryptedString %s', decryptedString);
	return decryptedString;
}

