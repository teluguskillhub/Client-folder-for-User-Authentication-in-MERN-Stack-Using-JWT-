import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './Myprofile';

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/myprofile' component={Myprofile} />
        </Switch>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
