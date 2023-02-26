import React,{Component} from 'react';
import "./Search.css";
import {Link} from "react-router-dom"
const curl = "https://nodetestapilicious.onrender.com/categories";

class Search extends Component{
    state = {
        categories:""
    }

    renderCategories = (data) =>{
        if(data){
            return data.map((item) => {
                return (
                    <div className="col-6 col-lg-3 category mb-3" key={item.id}>
                        <div className="category-section mb-2 p-3">
                            <Link to="/" className="category-part" title="Explore Today's Deals">
                                <img className="category-image w-100" src={item.category_img} alt={item.category}/>
                            </Link>
                        </div>
                        <Link to="/" title="Explore Today's Deals"><span className="category-name">{item.category}</span></Link>
                    </div>
                )
            })
        }
    }

    render(){
        return(
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