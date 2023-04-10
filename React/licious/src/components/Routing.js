import React,{useState} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './Home/Home';
import Header from './Header';
import Footer from './footer';
import Search from "./Home/Search";
import Listing from "./listing/listing";
import ListingDetail from './Details/details';
import BestSellersListingDetail from './Details/bestSellersDetails';
import BonelessCutsListingDetail from './Details/bonelessCutsDetails';
import CartPage from './cart/cartPage';
import PlaceOrder from './orders/placeOrder';
import ViewOrder from './orders/viewOrder'; 
import {CartProvider} from "../Context/cartContext";
import Login from "./Login/login";
import Register from "./Login/Register";

const Routing =() =>{
    

    return(
        <div>
            <CartProvider>
                <BrowserRouter>
                    {/* <Header/> */}
                    <div>
                        <Route exact path="/" component={Home}/> 
                        <Route path="/search" component={Search}/>
                        <Route path="/listing/:catId" component={Listing}/>
                        <Route path="/details/" component={ListingDetail}/>
                        <Route path="/bsDetails/" component={BestSellersListingDetail}/>
                        <Route path="/bcDetails/" component={BonelessCutsListingDetail}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/placeOrder" component={PlaceOrder}/>
                        <Route path="/viewBooking" component={ViewOrder}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
        </div>
    )
}


export default Routing;