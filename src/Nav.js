import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import { store } from './App';

const Nav = () => {
    const [token,setToken] = useContext(store)
    return (
        <div>
            
            {!token ?
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#"></a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <ul>
                    <Link to='/register' ><li>Register</li></Link>
                    <Link to='/login' ><li>Login</li></Link>
                </ul>
                </form>
            </div>
          </nav>
            
            </div>
            :
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Dashboard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            </nav>
}

        </div>
    )
}

export default Nav
