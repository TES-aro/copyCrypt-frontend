import * as CryptoJS from 'crypto-js';
import * as fs from 'fs';
import { join } from 'path';
import keyGen from './password.js'


const input = fs.readFileSync(join(__dirname, "input.txt"), 'utf-8')
const salt = 'needs some pepper'

/*
function strToByte(str: string): string{
	let strByte = ""
	for (let i = 0; i < str.length; i++){
		strByte.concat(String(str.charCodeAt(i)))
	}
	return strByte
}

function keyGen(password: string, salt: string): string{
	const keyLenght = 24;
	const passwordBytes = Number(strToByte(password));
	const saltBytes = Number(strToByte(salt));
	let hash = String(passwordBytes * saltBytes);
	if (hash.length < 3*keyLenght){
		hash.padEnd(3*keyLenght, "0")
	}

	const keyArray: number[] = [];
	let index = 0;
	while (keyArray.length < keyLenght){
		keyArray.push(Number(hash.substring(index, index + 4))%255)
		index += 4
	}
	return (Buffer.from(keyArray)).toString("utf-8")
}
*/


const password = "lorem ipsum";
const secretKey = keyGen(password,salt)
function encryptAES192(text: string, key: string): string {
  return CryptoJS.AES.encrypt(text, key).toString();
}
const encryptedText = encryptAES192(input, secretKey);
console.log("Encrypted:", encryptedText);

fs.writeFileSync(join(__dirname, "encrypted.txt"), encryptedText)


