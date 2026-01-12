import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/home";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
    <Router>
    		<div>
	    		<h1>hello world</h1>
	    		<Link to="/">home</Link>
	    		<Link to="/test">testPage</Link>
	    	</div>

	    	<div>
    			<Routes>
    				<Route path="/" element={<Home />} />
    				<Route path="/test" element={<TestPage />} />
    			</Routes>
    		</div>
    	</Router>
    </>
  )
}

export default App
