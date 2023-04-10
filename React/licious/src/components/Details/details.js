import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from "../Header";
import {Link} from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import AddToCart from "../cart/addToCart";
import "./details.css";
// import {useCart} from "../../Context/cartContextt";
import toast from "react-hot-toast"

const url = "https://nodeliciousapi.onrender.com/detail/";
const Details =(props)=>{
    // const [cart,setCart]=useCart();
    // state ={
    //     details:"",
    //     catId:sessionStorage.getItem("catId")
    // }
    const [details,setDetails] = useState([]);
    const [catId] = useState(sessionStorage.getItem("catId"));
    console.log(catId);

    useEffect(()=>{
        let itemId = props.location.search.split("=")[1];
        console.log(itemId);
        axios.get(`${url}${itemId}`)
            .then((res)=>setDetails(res.data[0]));
        console.log(details)
        // console.log(response.data[0].imgUrl)
        
    },[]);

        return(
            <>  
                <Header/>
                <main>
                    <div class="container detailCard">
                        <div class="row detailCardRow">
                            <div class="col-5">
                                <div class="imgWrappper">
                                    <img src={details.imgUrl} alt={details.name} class="detailsImg"/>
                                </div>
                            </div> 
                            <div class="col-7">
                                <div class="content">
                                    <h1 class="contentHeading">{details.name}</h1>
                                    <hr/>
                                    <p class="contentDes">
                                    {details.description}
                                    </p>   
                                    <div class="weightSection d-flex justify-content-around">
                                        <div class="weightSub">
                                            <img src="https://d2407na1z3fc0t.cloudfront.net/Banner/pices_pdp.png" alt="" class="subImg"/>
                                            <span class="subDes">No. of. Pieces : {details.no_of_pieces}</span>
                                        </div>
                                        <div class="weightSub">
                                            <img src="https://d2407na1z3fc0t.cloudfront.net/Banner/weight_pdp.png" alt="" class="subImg"/>
                                            <span class="subDes">Net Weight : {details.net}{details.unit}</span>
                                        </div>
                                    </div>
                                    <div class="priceSection mt-3 d-flex justify-content-between">
                                        <p class="MRP">{details.price_tag} {details.currency} {details.price}</p>
                                        <AddToCart item={details}/>
                                        {/* <button className="addToCartBtn">Add to Cart</button> */}
                                        {/* <button className="addToCartBtn" onClick={()=>{
                                            setCart([...cart,details]);
                                        toast.success("Item Added to cart")}}>Add to Cart</button> */}
                                    </div>
                                    <hr/>
                                    <div class="text-center mt-3">
                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bikeImg"/>
                                        <span>Today in <b>90 min</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
}

export default Details;