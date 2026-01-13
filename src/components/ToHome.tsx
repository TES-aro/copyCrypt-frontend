//oh my god this is ugly

// from:
	// https://gist.github.com/theskillwithin/f5d7458a3f946cc06abc61f8b722180e#file-404-tsx-L16-L22
export async function loader() {
  // Return a 404 status but let the component render
  return new Response(null, {
    status: 404,
    statusText: "Not Found",
  });
}

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
