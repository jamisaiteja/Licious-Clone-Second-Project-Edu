import React,{Component} from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import Home from './Home/Home';
import Search from './Home/Search';

const curl = "https://nodetestapilicious.onrender.com/categories"
class Header extends Component{

    state = {
        categories: "",
        locText:"",
        city:"Select City",
        locBtn:"Enter City"
    };
    

    renderCategories = (data)=>{
        // console.log(data)
        if(data){
            return data.map((item) => {
                const subLen = item.subcategories.length;
                const subCat = item.subcategories
                return (
                    <li key={item.id}>
                        <Link to={`/listing/${item.id}`}>
                            <img className="categories-dropdown-img" src={item.category_img} alt={item.category}/>
                            <span className="category-dropdown-title">{item.category}</span>
                        </Link>
                        {subLen>0 && 
                            <div className="dropdown-menu-1">
                                <ul>
                                    {subCat.map(sub =>(
                                        <li key={sub.subCategory_id}><Link to="/">{sub.subCategory_name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </li>
                )
            })
        }
    }

    onSuccess =(position)=>{
        this.setState({locBtn:"Detecting location..."})
        let {latitude, longitude} = position.coords;
        let weatherApiKey = "90d3dae1110b0e0bc9c8c5a914564578";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`)
        .then(response=>response.json()).then(result=>{
            console.log(result)
            let {name} =result;
            let {description} = result.weather[0];
            let {country} = result.sys;
            let {temp} =result.main;
            this.setState({locBtn:`${name} , ${country}`})
            this.setState({city:name + ', ' + temp + '\u00B0' + 'C'  + ', ' + description})
        }).catch(()=>{
            this.setState({locText:"Something went wrong"})
        })   
    }

    onError = (error) =>{
        if(error.code === 1){ //if user denied the request
            this.setState({locText:"You denied the request"})
         }else if(error.code === 2){ // if location is not available
            this.setState({locText:"Location not available"})
         }else{ // if any other error occured
            this.setState({locText:"Something went wrong"})
        }
    }

    renderLocation = ()=>{
        if(navigator.geolocation){
            this.setState({locBtn:"Allow to detect location"})
            navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError)
        }else{
            this.setState({locText:"Browser Does Not Support"})
        }
    }

    render(){
        return (
            <header className="fixed-top" id="header">
            <div className="top-nav">
                <div className="container">
                    <div className="row firstDiv">
                        <div className="col-12 col-md-6 d-none d-md-block top-nav-menu">
                            <ul className="list ">
                                <li className="why-licious">
                                    <a>Why Licious?</a>
                                </li>
                                <li className="downloads">
                                    <span>Download App</span>
                                    <a href="https://itunes.apple.com/in/app/buy-meat-online-licious/id1052440342?mt=8" target="_blank">
                                        <img src="https://www.licious.in/img/rebranding/ios_app_icon.svg" alt="ios"/>
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.licious" target="_blank">
                                        <img src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="android"/>
                                    </a>
                                </li>
                            </ul>
                        </div>  
                        <div className="col-12 col-md-6  d-none d-md-block top-nav-login">
                            <ul className="list">
                                <li className="certification">
                                        <Link to="https://www.licious.in/certification" target="_blank">
                                            FSSC 22000 Certification
                                        </Link>
                                    </li>
                                    <li className="about-us">
                                        <Link to="https://www.licious.in/about-us-new">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="careers">
                                        <Link to="http://careers.licious.in"> Careers @Licious</Link>
                                    </li>
                                    <li className="contact-us">
                                        <Link to="http://careers.licious.in"> Contact Us</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>          
                </div>
            </div>
            <div className="sub-header" id="subHeader-container">
                <div className="container">
                    <div className="row">
                        <div className="col-11 d-none d-md-block">
                            <div className="container">
                                <div className="secondDiv">
                                    
                                    <div className="logo"> 
                                        <Link to="/"><img className="LiciousLogo" src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="Licious"/></Link>
                                    </div>
                
                                    <div className="locationContainer">
                                        <div className="loca">
                                            <img src="https://www.licious.in/img/default/location_icon.svg" alt="location_img"/>
                                        </div>
                                        
                                        <div className="locText"> 
                                            <p id="city">{this.state.city}</p>
                                            <button id="locationBtn" className="location title">{this.state.locBtn}</button>
                                            <p id="locaText">{this.state.locText}</p>
                                        </div>
                                    </div>
                
                                    <div className="search-container">
                                        <div id="search" className="search">
                                            <Link to="/search" className="search-content">
                                                <span>Search for any delicious product</span>
                                                <img src="https://www.licious.in/img/default/search_icon.svg" alt="SearchImg"/>
                                            </Link>
                                        </div>
                                    </div>
                
                                    
                                    <div className="menu-bar mt-3">
                                        <ul>
                                            <li>
                                                <Link to="/" className="link"><img src="https://m.licious.in/image/rebranding/svg/category-dropdown-icon.svg" alt="categoryImg" className="menu-image"/><span className="title">Categories</span></Link>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        {this.renderCategories(this.state.categories)}
                                                    </ul>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <Link to='/login' className="link"><img src="https://m.licious.in/image/rebranding/png/profile-icon-new.png" alt="loginImg" className="menu-image"/><span className="title">Login</span></Link>
                                            </li>
                                            <li>
                                                <Link to='/login' className="link"><img src="https://m.licious.in/image/rebranding/png/profile-icon-new.png" alt="signupImg" className="menu-image"/><span className="title">Sign up</span></Link>
                                            </li>
                                            <li>
                                                <Link to="/cart" className="link"><img src="https://m.licious.in/image/rebranding/png/Cart_v2.png" alt="addToCart" className="menu-image"/><span className="title">Cart</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-11 d-block d-md-none">
                            <div className="container">
                                <div className="locationContainer">
                                    <div className="loca">
                                        <img src="https://www.licious.in/img/default/location_icon.svg" alt="location_img"/>
                                    </div>
                
                        
                                    <div className="locText"> 
                                            <p id="city">{this.state.city}</p>
                                            <button id="locationBtn" className="location title" onClick="showCities()">{this.state.locBtn}</button>
                                            <p id="locaText">{this.state.locText}</p>
                                    </div>
                
                                    
                                </div>
                                <div className="row secondDiv sub-header fixed-bottom text-center">
                                    <div className="col-3">
                                        <Link to='/'>
                                            <div><img src="https://i.ibb.co/rtTnRFr/ezgif-2-1ca9dc9ab2.png" alt="Home"/></div>
                                            <div className="title">Home</div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to='/search' >
                                            <div><img src="https://i.ibb.co/q7gY4k4/ezgif-2-2155281dac.png" alt="Categories"/></div>
                                            <div className="title">Categories</div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to='/search'>
                                            <div><img src="https://i.ibb.co/dDMPLbL/ezgif-2-6eec814230.png" alt="Search"/></div>
                                            <div className="title">Search</div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to='/'>
                                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Account"/></div>
                                            <div className="title">Account</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 light-dark-mode p-1">
                            <Link to="/"><img src="https://i.ibb.co/2tzw6HC/lightoff-removebg-preview.png" alt="lightOffRemoveBg-preview"  id="light" className="bulbImg"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        )
    }

    //api calling on page load
    componentDidMount(){
        fetch(curl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({categories:data})
        })

        // navigator.geolocation.getCurrentPosition(function(position){
        //     console.log(`Longi:${position.coords.longitude}, latti: ${position.coords.latitude}`)
        // })

        {this.renderLocation()}
    }
}

export default Header;