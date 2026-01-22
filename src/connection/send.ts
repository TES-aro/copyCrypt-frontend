const AddPaste = async (content: string, url : string) => {
	const response = await fetch( url, {
	method: "POST",
	body: content,
	headers: {
		"Content-Type" : "text/plain"
	}
	})
	return response;
}

export default AddPaste;
