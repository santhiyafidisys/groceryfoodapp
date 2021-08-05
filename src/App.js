
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Loginpage';
import Productpage from './Productpage';
import Productlist from './Productlist';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function App() {
  return (
 <Router>
   <Switch>
     <Route exact path="/Login" component={Login} />
     <Route  path="/Productpage" component={Productpage} />
     <Route path="/Productlist" component={Productlist} />

   </Switch>
 </Router>
  );
}


export default App;
