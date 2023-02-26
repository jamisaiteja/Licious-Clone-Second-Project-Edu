import React, {Component} from 'react';
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

    renderData = (catData) => {
        if(catData){
            if(catData.length > 0){
                // console.log(catData)
                return catData.map((item) => {
                    return(
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" alt={item.name} src={item.imgUrl}/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.des}</p>
                                        <p className="weight">{item.net}{item.unit}</p>
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
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading...</h2>
                </div>
            )
        }
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
        }
        
    }

    render() {
        return(
            <main>
                <div className="container">
                    <div className="row">
                        <div class="categoryHeading">
                            {this.renderTitle(this.state.categories)}
                        </div>
                        <hr/>
                        <div class="subCategories">
                            <div class="sc1">
                                <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e8259b77-ca4c-8829-31e8-810c69b19678/original/Todays_Deal_1.png" class="subCatImg"/>
                                <span class="sc_name">All</span>
                            </div>
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