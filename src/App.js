import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './Login';
import Register from './Register';
import dash from './dash';
import Error from './Error';

const App = () =>{
  return(
     <>
     <Switch>
       <Route exact path="/" component={Login} />
       <Route exact path="/register" component={Register}/>
       <Route exact path="/dash/home" component={dash}/>
       <Route component={Error}/>
     </Switch>
     </>
  );
}

export default App;
