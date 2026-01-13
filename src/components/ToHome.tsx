//oh my god this is ugly

function toHome(){
	const path = window.location.pathname
	const all = window.location.href
	const newUri = all.substring(0, all.length - path.length)
	window.location.replace(newUri)
	return(
		<>
		</>
	)
}

export default toHome;
