import React, {Component} from 'react';
import {TailSpin} from 'react-loader-spinner';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./listing.css";
import ListingDisplay from './listingDisplay';



const url = "https://nodetestapilicious.onrender.com/CategoryDetail/";
const curl = "https://nodetestapilicious.onrender.com/categories";

class listing extends Component{
    state = {
        catList:"",
        categories:""
    }

    renderTitle=(categories)=>{
        if(categories){
            let cattId = sessionStorage.getItem('catId');
            // console.log(cattId)
            let Title="";
            categories.map((item)=>{
                let Item = item.id;
                // console.log(cattId)
                // console.log(cattIdItem)
                if(cattId == Item){
                    Title = item.category;
                }
            })
            return(
                <h1>{Title}</h1>
            )
        }else{
            return(
                <div>
                    <TailSpin type="TailSpin" color="#4a4a4a" height={50} width={50} />
                    <h4 className="categoryHeading">Loading...</h4>
                </div>
            )
        }
        
    }

    renderSub=(categories)=>{
        if(categories){
            let cattId = sessionStorage.getItem('catId');
            return categories.map((item)=>{
                let Item = item.id;
                if(cattId == Item){
                    const subCatt = item.subcategories;
                    const subLen = item.subcategories.length;
                    console.log(subCatt,subLen);
                    return(
                        <div key={item.id}>
                            {subLen>0 && 
                                <div className ="sc1 d-flex">
                                    {subCatt.map(sub =>(
                                        <ul>
                                            <li key={sub.subCategory_id}>
                                                <Link to="/">
                                                    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e8259b77-ca4c-8829-31e8-810c69b19678/original/Todays_Deal_1.png" className="subCatImg"/>
                                                    <span className="scName">{sub.subCategory_name}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            }
                        </div>
                    )
                }
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

    renderData = (catData) => {
        if(catData){
            if(catData.length > 0){
                // console.log(catData)
                return catData.map((item) => {
                    let weight = item.net
                    return(
                            <div className="col-md-4">
                                <Link to={`/details?itemId=${item.id}`}>
                                    <div className="card">
                                        <div className="img-wrapper">
                                            <img className="imgFluid" alt={item.name} src={item.imgUrl}/>
                                        </div>
                                        <div className="cardBody">
                                            <h5 className="cardTitle">{item.name}</h5>
                                            <p className="cardText">{item.des}</p>
                                            {weight ? <p className="weight">{item.net} {item.unit}</p> :<p className="weight">{item.no_of_pieces} Pieces</p>}
                                            <div className="d-flex justify-content-between">
                                                <p className="MRP">{item.price_tag} {item.currency} {item.price}</p>
                                                <button className="addToCartBtn">Add to Cart</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center mt-3">
                                                <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                <span>Today in <b>90 min</b></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div> 
                    )
                })
                
            }else{
                return(
                    <div>
                        <h2>No Data As Per Filter</h2>
                    </div>
                )
            }

        }else{
            return(
                <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
                    <TailSpin type="TailSpin" color="#4a4a4a" height={50} width={50} />
                    <h4 className="categoryHeading">Loading...</h4>
                </div>
            )
        }
    }
    

    render() {
        return(
            <main>
                <div className="container">
                    <div className="row">
                        <div className="categoryHeading">
                            {this.renderTitle(this.state.categories)}
                        </div>
                        <hr/>
                        <div className="subCategories d-flex">
                            <div className="sc1">
                                <div>
                                    <Link to="/">
                                        <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e8259b77-ca4c-8829-31e8-810c69b19678/original/Todays_Deal_1.png" className="subCatImg"/>
                                        <span className="scName">All</span>
                                    </Link>
                                </div>
                            </div>
                            {this.renderSub(this.state.categories)}
                        </div>
                        <hr/>
                        
                        {this.renderData(this.state.catList)}
                    </div>
                </div>
            </main>
        )
    }

    //api calling with axios
    //using axios can get data using one then
    componentDidMount(){
        let catId = this.props.match.params.catId;
        // console.log(this.props);
        sessionStorage.setItem("catId", catId);
        axios.get(`${url}${catId}`)
            .then((res)=>{this.setState({catList:res.data})});
        axios.get(`${curl}`)
            .then((res)=>{this.setState({categories:res.data})});
    }
}

export default listing;