import React,{Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import "./details.css";

const url = "https://nodetestapilicious.onrender.com/detail/";
class Details extends Component{

    state ={
        details:"",
        catId:sessionStorage.getItem("catId")
    }

    
    render(){
        let {details} = this.state;
        return(
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
                                    <button class="addToCartBtn">Add to Cart</button>
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
        )
    }

    async componentDidMount(){
        let itemId = this.props.location.search.split("=")[1];
        // console.log(itemId);
        let response = await axios.get(`${url}${itemId}`);
        console.log(response.data[0])
        // console.log(response.data[0].imgUrl)
        this.setState({details:response.data[0]})
    }   
}

export default Details;