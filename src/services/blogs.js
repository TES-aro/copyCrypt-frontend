import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getByID = (id) => {
	const request = axios.get(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}
const comment = async (id, comment) => {
	try {
		const request = await getByID(id);
		const oldCommets = request.comments ?
		request.comments :
		[];
		const newComments = oldCommets.concat(comment);

		const url = baseUrl + `/${id}`;
    const token = window.localStorage.getItem('token')

    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        comments : newComments
      }),
      headers: {
	  		'Content-type': 'application/json; charset=UTF-8',
	  		'authorization': `Bearer ${token}`
			}
    })
	}catch (error){console.log("comment service error:",error)}
}
const like = async (id) => {
	try {
		const oldObject = (await getByID(id))
		if (!oldObject.likes){
			console.log("no likes", oldObject)
			oldObject.likes = 0}
		const url = baseUrl + `/${id}`;
    const token = window.localStorage.getItem('token')

    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: oldObject.likes + 1
      }),
      headers: {
	  		'Content-type': 'application/json; charset=UTF-8',
	  		'authorization': `Bearer ${token}`
			}
    })
    console.log("like response: ", response)
    return (oldObject.likes + 1)
  } catch(error){
    console.log('like button error: ', error)
  }
}
export default { getAll, like, comment}
