import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home/Home';
import Header from './Header';
import Footer from './footer';
import Search from "./Home/Search";

const Routing =() =>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <div>
                <Route exact path="/" component={Home}/> 
                <Route path="/search" component={Search}/>
            </div>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}


export default Routing;