import React,{useState,useEffect}from 'react';
import axios from 'axios';
import Header from "../Header";
import {Link} from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import "./details.css";
import AddToCart from "../cart/addToCart";

const url = "https://nodeliciousapi.onrender.com/detail/";
const  BcDetails = (props)=>{

    // state ={
    //     details:"",
    //     catId:sessionStorage.getItem("catId")
    // }

    const [bsDetails,setDetails] = useState([]);
    const [catId] = useState(sessionStorage.getItem("catId"));
    console.log(catId);

    useEffect(()=>{
        let itemId = props.location.search.split("=")[1];
        console.log(itemId);
        axios.get(`${url}${itemId}`)
            .then((res)=>setDetails(res.data[0]));
        console.log(bsDetails)
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
                                    <img src={bsDetails.imgUrl} alt={bsDetails.name} class="detailsImg"/>
                                </div>
                            </div> 
                            <div class="col-7">
                                <div class="content">
                                    <h1 class="contentHeading">{bsDetails.name}</h1>
                                    <hr/>
                                    <p class="contentDes">
                                    {bsDetails.description}
                                    </p>   
                                    <div class="weightSection d-flex justify-content-around">
                                        <div class="weightSub">
                                            <img src="https://d2407na1z3fc0t.cloudfront.net/Banner/pices_pdp.png" alt="" class="subImg"/>
                                            <span class="subDes">No. of. Pieces : {bsDetails.no_of_pieces}</span>
                                        </div>
                                        <div class="weightSub">
                                            <img src="https://d2407na1z3fc0t.cloudfront.net/Banner/weight_pdp.png" alt="" class="subImg"/>
                                            <span class="subDes">Net Weight : {bsDetails.net}{bsDetails.unit}</span>
                                        </div>
                                    </div>
                                    <div class="priceSection mt-3 d-flex justify-content-between">
                                        <p class="MRP">{bsDetails.price_tag} {bsDetails.currency} {bsDetails.price}</p>
                                        <AddToCart item={bsDetails}/>
                                        {/* <button className="addToCartBtn">Add to Cart</button> */}
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

export default BcDetails;