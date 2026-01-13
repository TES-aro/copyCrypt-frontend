import {
    BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <BrowserRouter>
    		<div>
    			<h3> Hello World! </h3>
    			<NavBar />
    		</div>
    	</BrowserRouter>
    </>
  )
}

export default App
