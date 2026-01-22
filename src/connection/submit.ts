import axios from 'axios';

const apiURL = "http://localhost:6969/api"

type post = {
	id: string,
	hash: string,
	content: string
}

const newId = async(): Promise<string> => {
	const reply = await axios.post(apiURL, "newID")
	return reply.data
}

const newPaste = async(content: string, password: string): Promise<string> => {
	const id = await newId();
	const postContent: post = {
		id: id,
		hash: hashGen(password, id),
		content: content
	}
	await axios.post(apiURL, postContent)
	return id;
}

function hashGen(password: string, id:string):string {
	const passByte = strToByte(password)
	const idByte = strToByte(id)
	const preHash = Number(passByte)* Number(idByte)
	return String(preHash % 1024)
}


function strToByte(str: string): string{
	let strByte = ""
	for (let i = 0; i < str.length; i++){
		strByte.concat(String(str.charCodeAt(i)))
	}
	return strByte
}

export default newPaste;
