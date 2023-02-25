import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const curl = "https://nodetestapilicious.onrender.com/categories";
const bsUrl = "https://nodetestapilicious.onrender.com/bestsellers"
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

    renderBestSellers = (data)=>{
        if(data){
            return data.map((item) => {
                return (
                    <div className="bcard" key={item.id}>
                        <div className="img-wrapper">
                            <img className="img-fluid" alt={item.name} src={item.imgUrl}/>
                        </div>
                        <div className="bcard-body">
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
                )
            })
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
                            {this.renderCategories(this.state.categories)}
                            <div className="col-12 mt-3">
                                <h3 className="category-heading mb-3">Best Sellers </h3>
                            </div>
                            
                            {/* <div id="carouselExampleControls" className="carousel carousel-dark slide d-none d-md-block" data-bs-keyboard="true">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="cards-wrapper d-flex">
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                                    <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                                    <p className="weight">500gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 179</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Biryani Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/00dd81b7-d0bf-4c78-c09c-3f605c33b06b/original/BiryaniCut.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Biryani Cut</h5>
                                                    <p className="card-text">A complemetary mix of bone-in and boneless chunks of...</p>
                                                    <p className="weight">500gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 315</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg?format=webp" alt="classic-Eggs"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">classic Eggs - Pack of 12</h5>
                                                    <p className="card-text">White Shell Eggs laid bt healthy hens.</p>
                                                    <p className="weight">Pieces-12</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 137</p>
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
                                    </div>
                                    <div className="carousel-item">
                                        <div className="cards-wrapper d-flex">
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Breast - Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Breast - Boneless</h5>
                                                    <p className="card-text">Boneless fillets: special nakhre for special cuts</p>
                                                    <p className="weight">450gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 269</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Boneless - Mini Bites" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be46f1fa-1aa8-81ea-7a47-11260815a274/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Boneless - Mini Bites</h5>
                                                    <p className="card-text">Bite-sized pieces of boneless chicken for pizza & more</p>
                                                    <p className="weight">250gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 199</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Goat Curry Cut - Small Pieces" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b4615c57-350e-de37-8ce7-7f3a4fe5ec02/original/lrt.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Goat Curry Cut - Small Pieces</h5>
                                                    <p className="card-text">Bite-sized cuts of rich goat meat on the bone, from the ribs,...</p>
                                                    <p className="weight">500gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 546</p>
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
                                    </div>
                                    <div className="carousel-item">
                                        <div className="cards-wrapper d-flex">
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Rohu (Rui) Medium - Bengali Cut, No Head" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feedc98d-42e1-0e0a-7da0-0072fa84977c/original/p2_tile_images_6th_folder-09_(1).jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Rohu (Rui) Medium - Bengali Cut, No Head</h5>
                                                    <p className="card-text">Nakhre that fly fish to you, cut &amp; cleaned for curries</p>
                                                    <p className="weight">500gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 275</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chunky Butter Chicken Spread" src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5ry5e/13/prod_display_image/1634636480.6321--2021-10-1915:11:20--1818?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chunky Butter Chicken Spread</h5>
                                                    <p className="card-text">Mildly spiced chunks of freshly roasted chicken blended...</p>
                                                    <p className="weight">Pieces:1</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 219</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Peppery Chicken Salami (Mini) | Ready To Eat" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad60f59b-612e-11b8-80f4-3308430cc609/original/Peppery-Chicken-Salami_(1).jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Peppery Chicken Salami (Mini) | Ready To Eat</h5>
                                                    <p className="card-text">Our Nakhrebaaz chefs present this meaty gourmet treat</p>
                                                    <p className="weight">Pieces: 8 &nbsp; Net wt: 125gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 199</p>
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
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            
    
                            <div id="carouselExampleControls1" className="carousel carousel-dark slide d-md-none" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                                <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                                <p className="weight">500gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 179</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Biryani Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/00dd81b7-d0bf-4c78-c09c-3f605c33b06b/original/BiryaniCut.jpg?format=webp"/>
                                            </div> 
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Biryani Cut</h5>
                                                <p className="card-text">A complemetary mix of bone-in and boneless chunks of...</p>
                                                <p className="weight">500gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 315</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/classNameic-Eggs---Pack-of-12-Hero-Shot.jpg?format=webp" alt="classNameic-Eggs"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">classNameic Eggs - Pack of 12</h5>
                                                <p className="card-text">White Shell Eggs laid bt healthy hens.</p>
                                                <p className="weight">Pieces-12</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 137</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Breast - Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Breast - Boneless</h5>
                                                <p className="card-text">Boneless fillets: special nakhre for special cuts</p>
                                                <p className="weight">450gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 269</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Boneless - Mini Bites" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be46f1fa-1aa8-81ea-7a47-11260815a274/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Boneless - Mini Bites</h5>
                                                <p className="card-text">Bite-sized pieces of boneless chicken for pizza & more</p>
                                                <p className="weight">250gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 199</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Goat Curry Cut - Small Pieces" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b4615c57-350e-de37-8ce7-7f3a4fe5ec02/original/lrt.jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Goat Curry Cut - Small Pieces</h5>
                                                <p className="card-text">Bite-sized cuts of rich goat meat on the bone, from the ribs,...</p>
                                                <p className="weight">500gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 546</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Rohu (Rui) Medium - Bengali Cut, No Head" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/feedc98d-42e1-0e0a-7da0-0072fa84977c/original/p2_tile_images_6th_folder-09_(1).jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Rohu (Rui) Medium - Bengali Cut, No Head</h5>
                                                <p className="card-text">Nakhre that fly fish to you, cut &amp; cleaned for curries</p>
                                                <p className="weight">500gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 275</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chunky Butter Chicken Spread" src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5ry5e/13/prod_display_image/1634636480.6321--2021-10-1915:11:20--1818?format=webp"/>
                                            </div> 
                                            <div className="card-body">
                                                <h5 className="card-title">Chunky Butter Chicken Spread</h5>
                                                <p className="card-text">Mildly spiced chunks of freshly roasted chicken blended...</p>
                                                <p className="weight">Pieces:1</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 219</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Peppery Chicken Salami (Mini) | Ready To Eat" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad60f59b-612e-11b8-80f4-3308430cc609/original/Peppery-Chicken-Salami_(1).jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Peppery Chicken Salami (Mini) | Ready To Eat</h5>
                                                <p className="card-text">Our Nakhrebaaz chefs present this meaty gourmet treat</p>
                                                <p className="weight">Pieces: 8 &nbsp; Net wt: 125gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 199</p>
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
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div> */}
                            
                            <div className="product-carousel">
                                <button className="pre-btn" onClick={this.btnPressPrev}><p>&lt;</p></button>
                                <button className="next-btn" onClick={this.btnPressNext}><p>&gt;</p></button>


                                <div className="cards-wrapper product-container">
                                    {this.renderBestSellers(this.state.bestSellers)}
                                    {/* <div className="bcard">
                                        <div className="img-wrapper">
                                            <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                        </div>
                                        <div className="bcard-body">
                                            <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                            <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                            <p className="weight">500gm</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="MRP">MRP: &#8377; 179</p>
                                                <button className="addToCartBtn">Add to Cart</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center mt-3">
                                                <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                <span>Today in <b>90 min</b></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bcard">
                                        <div className="img-wrapper">
                                            <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                        </div>
                                        <div className="bcard-body">
                                            <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                            <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                            <p className="weight">500gm</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="MRP">MRP: &#8377; 179</p>
                                                <button className="addToCartBtn">Add to Cart</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center mt-3">
                                                <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                <span>Today in <b>90 min</b></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bcard">
                                        <div className="img-wrapper">
                                            <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                        </div>
                                        <div className="bcard-body">
                                            <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                            <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                            <p className="weight">500gm</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="MRP">MRP: &#8377; 179</p>
                                                <button className="addToCartBtn">Add to Cart</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center mt-3">
                                                <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                <span>Today in <b>90 min</b></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bcard">
                                        <div className="img-wrapper">
                                            <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                        </div>
                                        <div className="bcard-body">
                                            <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                            <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                            <p className="weight">500gm</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="MRP">MRP: &#8377; 179</p>
                                                <button className="addToCartBtn">Add to Cart</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center mt-3">
                                                <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                <span>Today in <b>90 min</b></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bcard">
                                        <div className="img-wrapper">
                                            <img className="img-fluid" alt="Chicken Curry Cut" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/47789899-b679-281d-2ae3-6d6f92e296e0/original/shot.jpg?format=webp"/>
                                        </div>
                                        <div className="bcard-body">
                                            <h5 className="card-title">Chicken Curry Cut - Small Pieces</h5>
                                            <p className="card-text">Small pieces of bone-in & boneless chicken for curries</p>
                                            <p className="weight">500gm</p>
                                            <div className="d-flex justify-content-between">
                                                <p className="MRP">MRP: &#8377; 179</p>
                                                <button className="addToCartBtn">Add to Cart</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center mt-3">
                                                <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                <span>Today in <b>90 min</b></span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            
                            <div className="col-12 mt-3">
                                <h3 className="category-heading mb-3">Boneless Cuts </h3>
                            </div>
    
                            <div id="carouselExampleControls2" className="carousel carousel-dark slide d-none d-md-block" data-bs-keyboard="true">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="cards-wrapper d-flex">
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Goat Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/deb2ad7c-fc61-f252-e11b-7c26ed24d07d/original/Goat-Boneless-Hero-Shot_(2).jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Goat Boneless</h5>
                                                    <p className="card-text">Chunky, even pieces of fat-trimmed boneless goat meat</p>
                                                    <p className="weight">500gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 727</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Thigh Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Thigh Boneless</h5>
                                                    <p className="card-text">Fresh nakhre for fresh, juicy &amp; tender chicken thigh cuts</p>
                                                    <p className="weight">450gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 339</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/67dba6ad-6fb1-6230-d492-b346287da85b/original/p0_tile_images-07_(1).jpg?format=webp" alt="Basa - Boneless Cubes"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Basa - Boneless Cubes</h5>
                                                    <p className="card-text">Our fish fly — right to your home; cut, clean &amp; ready</p>
                                                    <p className="weight">400gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 427</p>
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
                                    </div>
                                    <div className="carousel-item">
                                        <div className="cards-wrapper d-flex">
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Breast - Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Breast - Boneless</h5>
                                                    <p className="card-text">Boneless fillets: special nakhre for special cuts</p>
                                                    <p className="weight">450gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 269</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Boneless - Mini Bites" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be46f1fa-1aa8-81ea-7a47-11260815a274/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Boneless - Mini Bites</h5>
                                                    <p className="card-text">Bite-sized pieces of boneless chicken for pizza & more</p>
                                                    <p className="weight">250gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 199</p>
                                                        <button className="addToCartBtn">Add to Cart</button>
                                                    </div>
                                                    <hr/>
                                                    <div className="text-center mt-3">
                                                        <img src="https://i.ibb.co/qBP1zVh/ezgif-1-ce4f8999fb-removebg-preview.png" alt="bike-image"/>
                                                        <span>Today in <b>90 min</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="img-wrapper">
                                                    <img className="img-fluid" alt="Chicken Tenders Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6e0be450-bfd6-6bf1-49b7-fac29b9c7b93/original/Chicken-Tenders-(Boneless)-Hero-Shot.jpg?format=webp"/>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Chicken Tenders Boneless</h5>
                                                    <p className="card-text">9-15 pieces of boneless chicken cut from the tenderloin</p>
                                                    <p className="weight">350gm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="MRP">MRP: &#8377; 265</p>
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
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            
                            <div id="carouselExampleControls3" className="carousel carousel-dark slide d-md-none" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Goat Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/deb2ad7c-fc61-f252-e11b-7c26ed24d07d/original/Goat-Boneless-Hero-Shot_(2).jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Goat Boneless</h5>
                                                <p className="card-text">Chunky, even pieces of fat-trimmed boneless goat meat</p>
                                                <p className="weight">500gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 727</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Thigh Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp"/>
                                            </div> 
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Thigh Boneless</h5>
                                                <p className="card-text">Fresh nakhre for fresh, juicy &amp; tender chicken thigh cuts</p>
                                                <p className="weight">450gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 339</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/67dba6ad-6fb1-6230-d492-b346287da85b/original/p0_tile_images-07_(1).jpg?format=webp" alt="Basa - Boneless Cubes"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Basa - Boneless Cubes</h5>
                                                <p className="card-text">Our fish fly — right to your home; cut, clean &amp; ready</p>
                                                <p className="weight">400gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 427</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Breast - Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Breast - Boneless</h5>
                                                <p className="card-text">Boneless fillets: special nakhre for special cuts</p>
                                                <p className="weight">450gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 269</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Boneless - Mini Bites" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/be46f1fa-1aa8-81ea-7a47-11260815a274/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Boneless - Mini Bites</h5>
                                                <p className="card-text">Bite-sized pieces of boneless chicken for pizza & more</p>
                                                <p className="weight">250gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 199</p>
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
                                    <div className="carousel-item">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="img-fluid" alt="Chicken Tenders Boneless" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6e0be450-bfd6-6bf1-49b7-fac29b9c7b93/original/Chicken-Tenders-(Boneless)-Hero-Shot.jpg?format=webp"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Chicken Tenders Boneless</h5>
                                                <p className="card-text">9-15 pieces of boneless chicken cut from the tenderloin</p>
                                                <p className="weight">350gm</p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="MRP">MRP: &#8377; 265</p>
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
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                    </div>
                    <div className="d-none d-md-block">
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
    }
}


export default Home;