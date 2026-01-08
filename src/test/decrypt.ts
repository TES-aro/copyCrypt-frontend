import * as CryptoJS from 'crypto-js';
import * as fs from 'fs';
import { join } from 'path';
import keyGen from './password.js'


const input = fs.readFileSync(join(__dirname, "encrypted.txt"), 'utf-8')

const password = "lorem ipsum";
const salt = "needs some pepper"
const secretKey = keyGen(password, salt)

const decryptedBytes = CryptoJS.AES.decrypt(input, secretKey);
const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
console.log("Decrypted Message:", decryptedText);
