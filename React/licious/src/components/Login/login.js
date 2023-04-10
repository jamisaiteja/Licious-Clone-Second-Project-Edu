import React,{useState,useEffect} from 'react';
// import "./placeOrder.css"
// import axios from 'axios';
import {useCart} from "../../Context/cartContext";
import Header from "../Header";

const url = "https://loginlicious.onrender.com/api/auth/login";
const Login = (props)=>{
    const [cart,setCart]= useCart();
    const [info,setInfo] = useState({
        email:'rohini@gmail.com',
        password:'12345678',
        message:""
    });
    // let c = sessionStorage.getItem("cart");
    // setCart([...cart,c]);

    const handleChange =(event)=>{
        setInfo({...info,[event.target.name]:event.target.value})
    }


    const login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.auth === false){
                setInfo({...info,message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                props.history.push('/')
            }
        })
        
    }

    return(
        <>
            <Header/>
            <main>
                <div className="container">
                        <hr/>
                        <div className="panel panel-primary p-2">
                            <div className="panel-heading text-center">
                                <h1 className='p-2 orderTitle'>Login</h1>
                            </div>
                            <div className="panel-body p-2">
                                <h3>{info.message}</h3>
                                {/* <form> */}
                                    <div className="row mb-3">
                                        <label htmlFor="email" className="col-sm-2 col-form-label text-center">Email :</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="email" name="email"
                                            value={info.email} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3 text-center">
                                        <label htmlFor="password" className="col-sm-2 col-form-label text-center">Password :</label>
                                        <div className="col-sm-10">
                                        <input type="password" className="form-control" id="password" name="password"
                                            value={info.password} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="text-center">
                                        <button className="btn btn-danger" onClick={()=>login()}
                                            type="submit">
                                                Login
                                        </button>
                                    </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
            </main>
        </>
    )
}

export default Login;