import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home/Home';
import Header from './Header';
import Footer from './footer';
import Search from "./Home/Search";
import Listing from "./listing/listing";
import ListingDetail from './Details/details';
import BestSellersListingDetail from './Details/bestSellersDetails';
import BonelessCutsListingDetail from './Details/bonelessCutsDetails';

const Routing =() =>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <div>
                <Route exact path="/" component={Home}/> 
                <Route path="/search" component={Search}/>
                <Route path="/listing/:catId" component={Listing}/>
                <Route path="/details/" component={ListingDetail}/>
                <Route path="/bsDetails/" component={BestSellersListingDetail}/>
                <Route path="/bcDetails/" component={BonelessCutsListingDetail}/>
            </div>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}


export default Routing;