
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Loginpage';
import Productpage from './Productpage';


function App() {
  return (
 <Router>
   <Switch>
     <Route exact path="/Login" component={Login} />
     <Route  path="/" component={Productpage} />

   </Switch>
 </Router>
  );
}

export default App;
