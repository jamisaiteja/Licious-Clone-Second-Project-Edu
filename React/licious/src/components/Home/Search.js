import React from 'react';
import "./Search.css";
import {Link} from "react-router-dom"

const Search = ()=>{
    return(
        <main>
            <div className='container'>
                <div class="category-header mt-3 mb-3">
                    <h2 class="category-heading">Shop by categories</h2>
                    <div class="sub-title-text">Freshest meats just for you</div>
                </div>
                <div className='row'>
                    <div class="col-6 col-lg-3 category mb-3">
                        <div class="category-section mb-2 p-3">
                            <a href="listing.html" class="category-part" title="Explore Today's Deals">
                                <img class="category-image w-100" src="https://i.ibb.co/CMp9Hf9/Todays-Deals-removebg-preview.png" alt="Today's Deals"/>
                            </a>
                        </div>
                        <Link to="/" title="Explore Today's Deals"><span class="category-name">Today's Deals</span></Link>
                    </div>
                    <div class="col-6 col-lg-3 category mb-3">
                        <div class="category-section mb-2 p-3">
                            <a href="" class="category-part">
                                            <img class="category-image w-100" src="https://i.ibb.co/rb0wrKH/Chicken-2-removebg-preview.png" alt="Chicken"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Chicken"><span class="category-name">Chicken</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Fish &amp; Seafood">
                                            <img class="category-image w-100" src="https://i.ibb.co/TY77Wy9/FIsh-1-removebg-preview.png" alt="Fish &amp; Seafood"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Fish &amp; Seafood"><span class="category-name">Fish &amp; Seafood</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Mutton">
                                            <img class="category-image w-100" src="https://i.ibb.co/DfvrCdj/MUT-removebg-preview.png" alt="Mutton"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Mutton"><span class="category-name">Mutton</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Ready to cook">
                                            <img class="category-image w-100" src="https://i.ibb.co/3Yj7TRR/RC-removebg-preview.png" alt="Ready to cook"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Ready to cook"><span class="category-name">Ready to cook</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Prawns">
                                            <img class="category-image w-100" src="https://i.ibb.co/jGWQSqn/Prawn-2-removebg-preview.png" alt="Prawns"/>
                                        </a>
                                    </div>
                                    <a href=""  title="Buy Prawns"><span class="category-name">Prawns</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Cold cuts">
                                            <img class="category-image w-100" src="https://i.ibb.co/1RW5kLD/Coldcuts-2-removebg-preview.png" alt="Cold Cuts"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Cold cuts"><span class="category-name">Cold cuts</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Spreads">
                                            <img class="category-image w-100" src="https://i.ibb.co/P9ZRXJ3/SPD-removebg-preview.png" alt="Spreads"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Spreads"><span class="category-name">Spreads</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Eggs">
                                            <img class="category-image w-100" src="https://i.ibb.co/fC3fVSh/Eggs-1-removebg-preview.png" alt="Eggs"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Eggs"><span class="category-name">Eggs</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Biryani &amp; Kebab">
                                            <img class="category-image w-100" src="https://i.ibb.co/0MnYBkQ/Biryani-2-removebg-preview.png" alt="Biryani &amp; Kebab"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Biryani &amp; Kebab"><span class="category-name">Biryani &amp; Kebab</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Combos">
                                            <img class="category-image w-100" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png" alt="Combos"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Combos"><span class="category-name">Plant Based Masala</span></a>
                            </div>
                            <div class="col-6 col-lg-3 category mb-3">
                                    <div class="category-section mb-2 p-3">
                                        <a href="" class="category-part" title="Buy Gourmet">
                                            <img class="category-image w-100" src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png" alt="Gourmet"/>
                                        </a>
                                    </div>
                                    <a href="" title="Buy Gourmet"><span class="category-name">Meat Masala</span></a>
                            </div>
                </div>
            </div>
        </main>
    )
}

export default Search;