import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home/Home';
import Header from './Header';
import Footer from './footer';
import Search from "./Home/Search";
import Listing from "./listing/listing"

const Routing =() =>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <div>
                <Route exact path="/" component={Home}/> 
                <Route path="/search" component={Search}/>
                <Route path="/listing/:catId" component={Listing}/>
            </div>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}


export default Routing;