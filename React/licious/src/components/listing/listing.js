import React, {useState,useEffect} from 'react';
import {TailSpin} from 'react-loader-spinner';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import "./listing.css";
import ListingDisplay from './listingDisplay';
import Header from "../Header";


const url = "https://nodeliciousapi.onrender.com/CategoryDetail";
const curl = "https://nodeliciousapi.onrender.com/categories";

const Listing=(props)=>{
    // state = {
    //     catList:"",
    //     categories:""
    // }
    // console.log(props);
    const [catList,setCatList]=useState([]);
    const [categories,setCategories]=useState();

    useEffect(()=>{
        let catId = props.match.params.catId;
        sessionStorage.setItem("catId", catId);
        axios.get(`${url}/${catId}`)
            .then((res)=>setCatList(res.data));
        axios.get(`${curl}`)
            .then((res)=>setCategories(res.data));
        
    },[]);

    const renderTitle=(categories)=>{
        if(categories){
            let cattId = sessionStorage.getItem('catId');
            // console.log(cattId)
            let Title="";
            categories.map((item)=>{
                let Item = item.id;
                // console.log(cattId)
                // console.log(cattIdItem)
                if(Number(cattId) === Item){
                    Title = item.category;
                }
                return "ok";
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

    const filter = (e,item)=>{
        console.log(e);
        let catId = props.match.params.catId;
        console.log(item,catId)
        let cdUrl= "";
        if(item === 0){
            cdUrl = `${url}/${catId}`
        }else{
            cdUrl = `${url}/${catId}?subCatId=${item}`
        }
        console.log(cdUrl)
        axios.get(cdUrl)
            .then((res) => setCatList(res.data))
    }
    const renderSub=(categories)=>{
        if(categories){
            let cattId = sessionStorage.getItem('catId');
            return categories.map((item)=>{
                let Item = item.id;
                if(Number(cattId) === Item){
                    const subCatt = item.subcategories;
                    const subLen = item.subcategories.length;
                    // console.log(subCatt,subLen);
                    return(
                        <div key={item.id}>
                            {subLen>0 && 
                                <div className ="sc1 d-flex">
                                    {subCatt.map(sub =>(
                                        <ul onClick={(e)=>filter(e,sub.subCategory_id)} key={sub.subCategory_id}>
                                            <div>
                                                <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e8259b77-ca4c-8829-31e8-810c69b19678/original/Todays_Deal_1.png" className="subCatImg" alt={sub.subCategory_name}/>
                                                <span className="scName">{sub.subCategory_name}</span>
                                            </div>
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

    const renderData = (catData,url) => {
        if(catData){
            if(catData.length > 0){
                // console.log(catData)
                return catData.map((item) => {
                    
                    return(
                        <ListingDisplay items={item} url={url} key={item.id}/>
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
    

    // render() {
        return(
            <>
                <Header/>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="categoryHeading">
                                {renderTitle(categories)}
                            </div>
                            <hr/>
                            <div className="subCategories d-flex">
                                <div className="sc1">
                                    <div>
                                        <li onClick={()=>filter(0)}>
                                            <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e8259b77-ca4c-8829-31e8-810c69b19678/original/Todays_Deal_1.png" className="subCatImg" alt="All"/>
                                            <span className="scName">All</span>
                                        </li>
                                    </div>
                                </div>
                                {renderSub(categories)}
                            </div>
                            <hr/>
                            
                            {renderData(catList,"/details?itemId=")}
                        </div>
                    </div>
                </main>
            </>
        )
    // }

    //api calling with axios
    // //using axios can get data using one then
    // componentDidMount(){
    //     let catId = this.props.match.params.catId;
    //     console.log(this.props);
    //     sessionStorage.setItem("catId", catId);
    //     axios.get(`${url}${catId}`)
    //         .then((res)=>{this.setState({catList:res.data})});
    //     axios.get(`${curl}`)
    //         .then((res)=>{this.setState({categories:res.data})});
    // }
}

export default Listing;