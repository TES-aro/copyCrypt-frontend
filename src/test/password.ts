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

export default keyGen;
