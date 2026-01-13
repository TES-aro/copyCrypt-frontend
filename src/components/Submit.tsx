import { useState } from 'react';
import { TextField } from '@mui/material'

function Submit(){
	const [password, setPassword] = useState("");
	const [content, setContent] = useState("");

	function contentChange(e: React.ChangeEvent<HTMLInputElement>){
		setContent(e.target.value)
	}

	function passwordChange(e: React.ChangeEvent<HTMLInputElement>){
		setPassword(e.target.value)
	}

	function buttonPress(){
		console.log(password)
		console.log(content)
		setPassword("")
		setContent("")
	}
	return(
		<div >
			<form  >
			<TextField name="content" value={content} onChange={contentChange}
				multiline={true} minRows={16} style={{width:"900px", padding:"20px"}}
			/>
			<br />
			<TextField name="password" style={{padding: "20px", }}  value={password} onChange={passwordChange}/>
			<button name='submit' onClick={buttonPress}> submit </button>
			</form>
		</div>
	)
}

export default Submit;
