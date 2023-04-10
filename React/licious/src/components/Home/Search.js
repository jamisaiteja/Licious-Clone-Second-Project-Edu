import React,{Component} from 'react';
import "./Search.css";
import {Link} from "react-router-dom"
import Header from "../Header";
import { TailSpin } from 'react-loader-spinner';
const curl = "https://nodeliciousapi.onrender.com/categories";

class Search extends Component{
    state = {
        categories:""
    }

    renderCategories = (data) =>{
        if(data){
            return data.map((item) => {
                return (
                    
                        <div className="col-6 col-lg-3 category mb-3" key={item.id}>
                            <Link to ={`/listing/${item.id}`}>
                                <div className="category-section mb-2 p-3">
                                    <span to="/" className="category-part" title="Explore Today's Deals">
                                        <img className="category-image w-100" src={item.category_img} alt={item.category}/>
                                    </span>
                                </div>
                                <span to="/" title="Explore Today's Deals"><span className="category-name">{item.category}</span></span>
                            </Link>
                        </div>
                    
                )
            })
        }else{
            return(
                <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"50vh"}}>
                    <TailSpin type="TailSpin" color="#4a4a4a" height={50} width={50} />
                    <h4 className="categoryHeading">Loading...</h4>
                </div>
            )
        }
    }

    render(){
        return(
            <>
                <Header/>
                <main>
                    <div className='container'>
                        <div class="category-header mt-3 mb-3">
                            <h2 class="category-heading">Shop by categories</h2>
                            <div class="sub-title-text">Freshest meats just for you</div>
                        </div>
                        <div className='row'>
                            {this.renderCategories(this.state.categories)}
                        </div>
                    </div>
                </main>
            </>
        )
    }

    componentDidMount(){
        fetch(curl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({categories:data})
        })
    }
}

export default Search;