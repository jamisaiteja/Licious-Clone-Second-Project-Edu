 /*Geo location */
var locaText = document.querySelectorAll("#locatext");
var locaBtn = document.querySelectorAll("#locationbtn");
var city = document.querySelectorAll("#city");
console.log(locaText,locaBtn,city)
function showCities(){
    if(navigator.geolocation){
        locaBtn.forEach((x)=>{
            x.textContent = "Allow to detect location"
        })
        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    }else{
        locaText.forEach((x)=>{
            x.textContent = "Browser Does Not Support"
        })
    }
}



function onSuccess(position){
    locaBtn.forEach((x)=>{
        x.textContent = "Detecting location..."
    })
    let {latitude, longitude} = position.coords;
    let apikey = '132c358937004b65b7b14abfcc8f8f4e';
    // sending get request to the api with passing lat and long coordinates to the user position
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
    //parsing json data into javascript object wuth returning iy and in another then function receiving the object that is sent by the api
    .then(response => response.json()).then(result => {
        let allDetails = result.results[0].components; //passing components obj to allDetails variable
        let {country,county,postcode,state,state_district} = allDetails; //getting properties from allDetails
        city.forEach((x)=>{
            x.textContent=`${county}`;
        })
        locaBtn.forEach((x)=>{
            x.textContent=`${county},${country},${postcode}`;
        })

    }).catch(()=>{
        locaText.forEach((x)=>{
            x.textContent = "Something went wrong"
        })
    })
}

function onError(error){
    if(error.code === 1){ //if user denied the request
        locaText.forEach((x)=>{
            x.textContent = "You denied the request"
        })
    }else if(error.code === 2){ // if location is not available
        locaText.forEach((x)=>{
            x.textContent = "Location not available"
        })
    }else{ // if any other error occured
        locaText.forEach((x)=>{
            x.textContent = "Something went wrong"
        })
    }
    locaBtn.setAttribute("disabled","true") // is user denied the request then button will be disabled
}





// Dark Mode and Light Mode

let x = document.getElementById("light");
let header = document.querySelectorAll('.sub-header');
let menuBar = document.querySelectorAll('.title');
let main = document.querySelector('main');
let category = document.querySelectorAll('.category-section');
let carousalCards = document.querySelectorAll('.card');
let footer = document.querySelector('footer');

console.log(menuBar);

let clicked = false;
function on(){
    if(!clicked){
        clicked = true;
        x.src = "https://i.ibb.co/9GWjMtS/lighton-removebg-preview.png";
        header.forEach((x)=>{
            x.style.backgroundColor = "#858282";
            x.style.color="#fff"
        });
        
        menuBar.forEach((x)=>{
            x.style.color="#fff"
        });

        main.style.backgroundColor = "#000";
        main.style.color="#fff"
        category.forEach((x)=>{
            x.style.backgroundColor = "#4a4a4a";
        });

        carousalCards.forEach((x)=>{
            x.style.backgroundColor = "#908f8f";
        });

        footer.style.backgroundColor="#aeaeae"
    }else{
        clicked = false
        x.src = "https://i.ibb.co/2tzw6HC/lightoff-removebg-preview.png";
        header.forEach((x)=>{
            x.style.backgroundColor = "#fff";
            x.style.color="#4a4a4a"
        })
        menuBar.forEach((x)=>{
            x.style.color="#4a4a4a"
        })
        main.style.backgroundColor = "#f7f6f6";
        main.style.color="#4a4a4a"
    }
}