import * as crypto from "crypto";
import * as fs from 'fs';
import { join } from 'path';

const input = fs.readFileSync(join(__dirname, "input.txt"), 'utf-8')

console.log(input)
const salt = "could use some pepper!"

const algo = 'aes-256-cbc'
const password = "lorem ipsum"
const key = crypto.scryptSync(password, salt, 32)
const iv = crypto.randomBytes(16)



function encrypt(text: string): string {
    const cipher = crypto.createCipheriv(algo, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}


const encrypted = encrypt(input)
fs.writeFileSync(join(__dirname,"encrypted.txt"), encrypted)

console.log('encrypted:\n', encrypted)
