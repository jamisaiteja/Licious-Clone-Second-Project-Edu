import React,{useEffect} from 'react';
import {useCart} from "../../Context/cartContext";
// import toast from "react-hot-toast"
// const url = "https://nodeliciousapi.onrender.com/product";

const AddToCart = (props) => {
    const [cart,setCart] = useCart();
    
    
    const handleClick = (item,e)=>{
        // let valueArr = cart.map((i)=>i._id);
        // let isPresent = valueArr.some((i,index)=>{
        //     return valueArr.indexOf(i) !== index;
        // })
        // if(isPresent) return;
        // setCart([...cart,item]);
        let isPresent= cart.some((i)=>
            i._id === item._id)
        if(isPresent){
            alert("Item is already in cart. Navigate to cart page to add more quantity")
        }else{
            setCart([...cart,item]);
            sessionStorage.setItem("cart",JSON.stringify([...cart,item]));
        }
        
        // alert("Item Added to cart");
    }
    const {item} = props;
    
    console.log(cart);
    
    return (
        <button className="addToCartBtn" onClick={(e)=>handleClick(item,e)}>Add to Cart</button>
    )
}

export default AddToCart