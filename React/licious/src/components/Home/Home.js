import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import './Home.css';

const curl = "https://nodetestapilicious.onrender.com/categories";
const bsUrl = "https://nodetestapilicious.onrender.com/bestsellers";
const bcUrl = "https://nodetestapilicious.onrender.com/bonelesscuts";
// const catDetailUrl = "https://nodetestapilicious.onrender.com/CategoryDetail/5"
class Home extends Component {
    state = {
        categories:"",
        bestSellers:"",
        bonelessCuts:""
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

    
    btnPressPrev(){
        let width = document.querySelector('.product-container').clientWidth;
        document.querySelector('.product-container').scrollLeft = document.querySelector('.product-container').scrollLeft - width;
        console.log(width)
    }

    btnPressNext(){
        let width = document.querySelector('.product-container').clientWidth;
        document.querySelector('.product-container').scrollLeft = document.querySelector('.product-container').scrollLeft + width;
        console.log(width)
    }

    btnPressPrevBc(){
        let width = document.querySelector('#bcCarousal').clientWidth;
        document.querySelector('#bcCarousal').scrollLeft = document.querySelector('#bcCarousal').scrollLeft - width;
        console.log(width)
    }

    btnPressNextBc(){
        let width = document.querySelector('#bcCarousal').clientWidth;
        document.querySelector('#bcCarousal').scrollLeft = document.querySelector('#bcCarousal').scrollLeft + width;
        console.log(width)
    }

    renderHome = (data)=>{
        if(data){
            return data.map((item) => {
                return (
                    <div className="bCard" key={item.id}>
                        <Link to={`/details?itemId=${item.id}`}>
                            <div className="imgWrapper">
                                <img className="imgFluid" alt={item.name} src={item.imgUrl}/>
                            </div>
                            <div className="bCardBody">
                                <h5 className="cardTitle">{item.name}</h5>
                                <p className="cardText">{item.des}</p>
                                <p className="weight">{item.net}{item.unit}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="MRP">{item.price_tag} {item.currency} {item.price}</p>
                                    <button className="addToCartBtn">Add to Cart</button>
                                </div>
                                <hr/>
                                <div className="text-center">
                                    <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                    <span className="cardDeli">Today in <b>90 min</b></span>
                                </div>
                            </div>
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
        return (
            <main>
                <div className="carsousal">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e" className="d-block w-100" alt="Today-Deals"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7b6d14949" className="d-block w-100" alt="Kebabs"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b797c88952" className="d-block w-100" alt="Fresh chicken Cuts"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b79d5c017f" className="d-block w-100" alt="Fresh Fish Cuts"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a04f421e" className="d-block w-100" alt="Perfect mix of mutton pieces"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7a8d9a432" className="d-block w-100" alt="classNameic Eggs"/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_620b7acabe3b2" className="d-block w-100" alt="Ready to eat chicken,fish,prawn & egg spreads!"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                    <div className="container">
                        <div className="category-header mt-3 mb-3">
                            <h2 className="category-heading">Shop by categories</h2>
                            <div className="sub-title-text">Freshest meats just for you</div>
                        </div>
                        <div className="row">
                            {/* <Link to="/listing"> */}
                                {this.renderCategories(this.state.categories)}
                            {/* </Link> */}
                            <div className="col-12 mt-3">
                                <h3 className="category-heading mb-3">Best Sellers </h3>
                            </div>
                            
                            <div className="product-carousel">
                                <button className="pre-btn" onClick={this.btnPressPrev}><p>&lt;</p></button>
                                <button className="next-btn" onClick={this.btnPressNext}><p>&gt;</p></button>

                                <div className="cards-wrapper product-container">
                                    {this.renderHome(this.state.bestSellers)}
                                </div>
                            </div>
                            
                            <div className="col-12 mt-3">
                                <h3 className="category-heading mb-3">Boneless Cuts </h3>
                            </div>

                            <div className="product-carousel">
                                <button className="pre-btn" onClick={this.btnPressPrevBc}><p>&lt;</p></button>
                                <button className="next-btn" onClick={this.btnPressNextBc}><p>&gt;</p></button>


                                <div className="cards-wrapper product-container" id="bcCarousal">
                                    {this.renderHome(this.state.bonelessCuts)}
                                </div>
                            </div>
                    </div>
                    <div className="col-12 d-none d-md-block">
                        <div className="Home_big_bottom_img_div__kf6K1">
                            <img src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db" alt=""/>
                        </div>
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

        fetch(bsUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({bestSellers:data})
        })

        fetch(bcUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({bonelessCuts:data})
        })

        // fetch(catDetailUrl,{method:'GET'})
        // .then((res) => res.json())
        // .then((data) => {
        //     this.setState({categories:data})
        // })
    }
}


export default Home;