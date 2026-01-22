const GetPaste = async (id: string, url : string) => {
	const address = url.concat("/".concat(id))
	const response = await fetch( address, {
	method: "GET"
	})
	return response;
}

export default GetPaste;
