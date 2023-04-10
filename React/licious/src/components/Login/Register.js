import React,{useState,useEffect} from 'react';
import {useCart} from "../../Context/cartContext";
// import "./placeOrder.css"
import axios from 'axios';
import Header from "../Header";

const url = "https://loginlicious.onrender.com/api/auth/register";
const Register = (props)=>{
    
    const [cart] = useCart();
    const [info,setInfo] = useState({
        name:'Rohini',
        email:'rohini@gmail.com',
        password:'12345678',
        phone:'987654321'
    });
    

    const handleChange =(event)=>{
        setInfo({...info,[event.target.name]:event.target.value})
    }


    const register= ()=>{
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(props.history.push('/login'))
    }

    return(
        <>
            <Header/>
            <main>
                <div className="container">
                        <hr/>
                        <div className="panel panel-primary p-2">
                            <div className="panel-heading text-center">
                                <h1 className='p-2 orderTitle'>Register</h1>
                            </div>
                            <div className="panel-body p-2">
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="fname" className="col-sm-1 col-form-label text-center">FirstName :</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="fname" name="name"
                                            value={info.name} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                        <label htmlFor="email" className="col-sm-1 col-form-label text-center">Email :</label>
                                        <div className="col-sm-5">
                                        <input type="text" className="form-control" id="email" name="email"
                                            value={info.email} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="password" className="col-sm-1 col-form-label text-center">Password :</label>
                                        <div className="col-sm-5">
                                            <input type="password" className="form-control" id="password" name="password"
                                            value={info.password} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                        <label htmlFor="phone" className="col-sm-1 col-form-label text-center">Phone :</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="phone"name="phone"
                                            value={info.phone} onChange={(e)=>handleChange(e)}/>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="text-center">
                                        <button className="btn btn-danger" onClick={()=>register()}
                                            type="submit">
                                                Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </main>
        </>
    )
}

export default Register;