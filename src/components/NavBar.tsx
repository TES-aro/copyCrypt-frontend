import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "../pages/home";
import TestPage from "../pages/TestPage";
import ToHome from "./ToHome"
import Submit from "./Submit"

const padding = {
	padding : 10
}

const startPad = {
	paddingLeft : 20,
	paddingRight : padding.padding,
}



function NavBar() {
  return (
    <>
   		<div >
	    	<Link style={startPad} to="/">home</Link>
	    	<Link style={padding} to="/test">testPage</Link>
	    	<Link style={padding} to="/submit">submit</Link>
	    </div>

	    <div>
    		<Routes>
    			<Route path="/" element={<Home />} />
    			<Route path="/test" element={<TestPage />} />
    			<Route path="/submit" element={<Submit />} />
    			<Route path="*" element={<ToHome />} />
    		</Routes>
    	</div>
    </>
  )
}

export default NavBar;
