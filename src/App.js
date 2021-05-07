import inicio from './screens/inicio'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path='/' component={inicio} exact/>
      </div>
    </Router>
  );
}

export default App;
