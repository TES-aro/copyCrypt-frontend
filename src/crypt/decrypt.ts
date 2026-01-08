import * as crypto from "crypto";
import * as fs from 'fs';
import { join } from 'path';

const input = fs.readFileSync(join(__dirname, "encrypted.txt"), 'utf-8')

console.log(input)
const salt = "could use some pepper!"

const algo = 'aes-256-cbc'
const password = "lorem ipsum"
const key = crypto.scryptSync(password, salt, 32)
const iv = crypto.randomBytes(16)

function decrypt(encryptedText: string): string {
    const decipher = crypto.createDecipheriv(algo, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}


const decrpyted = decrypt(input)

console.log('decrypted:\n' + decrpyted)
