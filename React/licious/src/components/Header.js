import React,{useState,useEffect} from 'react';
import "./Header.css"
import { Link,withRouter } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import {useCart} from "../Context/cartContext";

const curl = "https://nodeliciousapi.onrender.com/categories";
const url = "https://loginlicious.onrender.com/api/auth/userinfo"
const Header =(props)=>{

    const [categories,setCategories] = useState();
    const [locText,setLocText] = useState();
    const [city,setCity] = useState("Select City");
    const [locBtn,setLocBtn] = useState("Enter City");
    const [cart,setCart] = useCart();
    const [user,setUser] = useState("");

    const handleLogout = () => {
        sessionStorage.setItem('loginStatus','loggedOut')
        sessionStorage.setItem('userInfo','');
        sessionStorage.removeItem('ltk')
        setCart([]);
        setUser('');
        props.history.push('/')
    }

    const conditionlHeader = () => {
        if(user.name){
            let data =user
            sessionStorage.setItem('loginStatus','loggedIn')
            sessionStorage.setItem('userInfo',JSON.stringify(data))
            return(
                <>
                    <li>
                        <Link to='/login' className="link"><img src="https://m.licious.in/image/rebranding/png/profile-icon-new.png" alt="loginImg" className="menu-image"/><span className="title">Hi {data.name} </span></Link>
                    </li>
                    <li>
                        <span className="link" onClick={()=>handleLogout()}><img src="https://m.licious.in/image/rebranding/png/profile-icon-new.png" alt="signupImg" className="menu-image"/><span className="title">Log Out</span></span>
                    </li>
                </>
            )
        }else{
            return(
                <>
                    <li>
                        <Link to='/login' className="link"><img src="https://m.licious.in/image/rebranding/png/profile-icon-new.png" alt="loginImg" className="menu-image"/><span className="title">Login</span></Link>
                    </li>
                    <li>
                        <Link to='/register' className="link"><img src="https://m.licious.in/image/rebranding/png/profile-icon-new.png" alt="signupImg" className="menu-image"/><span className="title">Sign up</span></Link>
                    </li>
                </>
            )
        }
    }

    const conditionlHeader2 = () => {
        if(user.name){
            let data =user
            sessionStorage.setItem('loginStatus','loggedIn')
            sessionStorage.setItem('userInfo',JSON.stringify(data))
            return(
                <>
                    <li className="col-3">
                        <Link to='/login' className="link">
                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Search"/></div>
                            <div className="title">Hi {data.name} </div>
                        </Link>
                    </li>
                    <li className="col-3">
                        <span className="link" onClick={()=>handleLogout()}>
                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Search"/></div>
                            <div className="title">Logout </div>
                        </span>
                    </li>
                </>
            )
        }else{
            return(
                <>
                    <li className="col-3">
                        <Link to='/login' className="link">
                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Search"/></div>
                            <div className="title">Login </div>
                        </Link>
                    </li>
                    <li className="col-3">
                        <Link to='/register' className="link">                            
                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Search"/></div>
                            <div className="title">Sign Up </div>
                        </Link>
                    </li>
                </>
            )
        }
    }

    const renderCategories = (data)=>{
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
        }else{
            return(
                <div>
                    <TailSpin type="TailSpin" color="#4a4a4a" height={50} width={50} />
                    <h4 className="categoryHeading">Loading...</h4>
                </div>
            )
        }
    }

    const onSuccess =(position)=>{
        setLocBtn("Detecting location...")
        let {latitude, longitude} = position.coords;
        let weatherApiKey = "90d3dae1110b0e0bc9c8c5a914564578";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`)
        .then(response=>response.json()).then(result=>{
            // console.log(result)
            let {name} =result;
            let {description} = result.weather[0];
            let {country} = result.sys;
            let {temp} =result.main;
            setLocBtn(`${name} , ${country}`)
            setCity(name + ', ' + temp + '\u00B0' + 'C'  + ', ' + description)
        }).catch(()=>{
            setLocText("Something went wrong")
        })   
    }

    const onError = (error) =>{
        if(error.code === 1){ //if user denied the request
            setLocText("You denied the request")
         }else if(error.code === 2){ // if location is not available
            setLocText("Location not available")
         }else{ // if any other error occured
            setLocText("Something went wrong")
        }
    }

    const renderLocation = ()=>{
        if(navigator.geolocation){
            setLocBtn("Allow to detect location")
            navigator.geolocation.getCurrentPosition(onSuccess,onError)
        }else{
            setLocText("Browser Does Not Support")
        }
    }
    useEffect(()=>{
        fetch(curl,{method:'GET'})
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })

        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setUser(data)
        })

        {renderLocation()}

        
    },[]);
    
    

    // render(){
        return (
            <header className="fixed-top" id="header">
            {/* <div className="top-nav">
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
            </div> */}
            <div className="sub-header" id="subHeader-container">
                <div className="container">
                    <div className="row">
                        <div className="col-11 d-none d-md-block">
                            <div className="container">
                                <div className="secondDiv">
                                    
                                    <div className="logo"> 
                                        <Link to="/"><img className="liciousLogo" src="https://www.licious.in/image/rebranding/svg/licious-logo.svg" alt="Licious"/></Link>
                                    </div>
                
                                    <div className="locationContainer">
                                        <div className="loca">
                                            <img src="https://www.licious.in/image/rebranding/svg/location-pin.svg" alt="location_img"/>
                                        </div>
                                        
                                        <div className="locText"> 
                                            <p id="city">{city}</p>
                                            <button id="locationBtn" className="location title">{locBtn}</button>
                                            <p id="locaText">{locText}</p>
                                        </div>
                                    </div>
                
                                    <div className="search-container">
                                        <div id="search" className="search">
                                            <Link to="/search" className="search-content">
                                                <span>Search for any delicious product</span>
                                                <img src="https://www.licious.in/image/search_venus_icon.svg" alt="SearchImg"/>
                                            </Link>
                                        </div>
                                    </div>
                
                                    
                                    <div className="menu-bar mt-3">
                                        <ul>
                                            <li>
                                                <Link to="/search" className="link"><img src="https://m.licious.in/image/rebranding/svg/category-dropdown-icon.svg" alt="categoryImg" className="menu-image"/><span className="title">Categories</span></Link>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        {renderCategories(categories)}
                                                    </ul>
                                                </div>
                                                
                                            </li>
                                            {conditionlHeader()}
                                            <li>
                                                <Link to="/cart" className="link"><span><img src="https://m.licious.in/image/rebranding/png/Cart_v2.png" alt="addToCart" className="menu-image"/><span className='cartLength'>{cart?.length}</span></span><span className="title">Cart</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col-11 d-block d-md-none">
                            <div className="container">
                                <div className='row'>
                                    <div className="locationContainer col-9">
                                        <div className="loca">
                                            <img src="https://www.licious.in/image/rebranding/svg/location-pin.svg" alt="location_img"/>
                                        </div>
                    
                            
                                        <div className="locText"> 
                                                <p id="city">{city}</p>
                                                <button id="locationBtn" className="location title">{locBtn}</button>
                                                <p id="locaText">{locText}</p>
                                        </div>
                                    </div>
                                    
                                    <li className="col-3 m-auto">
                                        <Link to="/cart" className="link">
                                            <span><img src="https://m.licious.in/image/rebranding/png/Cart_v2.png" alt="addToCart" className="menu-image"/><span className='cartLength'>{cart?.length}</span></span><span className="title">Cart</span>
                                        </Link>
                                    </li>
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
                                    {/* <div className="col-3">
                                        <Link to='/'>
                                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Search"/></div>
                                            <div className="title">Sign up</div>
                                        </Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to='/'>
                                            <div><img src="https://i.ibb.co/MD7THHq/ezgif-2-de2adde4aa.png" alt="Account"/></div>
                                            <div className="title">Login</div>
                                        </Link>
                                    </div> */}
                                    {conditionlHeader2()}
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
    // }

    //api calling on page load
    // componentDidMount(){
    //     fetch(curl,{method:'GET'})
    //     .then((res) => res.json())
    //     .then((data) => {
    //         this.setState({categories:data})
    //     })

    //     {this.renderLocation()}
    // }
}

export default withRouter(Header);