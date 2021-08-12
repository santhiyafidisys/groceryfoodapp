import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import Login from './Loginpage';
import Productpage from './Productpage';
import Producttype from './Producttype';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function App() {
  return (
  <Router>
   <Switch>
     <Route exact path="/" component={Login} />
     <Route  path="/productpage" component={Productpage} />
     <Route path="/" component={Producttype} />
    </Switch>
  </Router>
  );
}
export default App;
