
const nav = document.querySelector("#header");

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 10) {
        if (!nav.classList.contains("scrolled-down")) {
        nav.classList.add("scrolled-down");
        }
    } else {
        if (nav.classList.contains("scrolled-down")) {
        nav.classList.remove("scrolled-down");
        }
    }
};

document.addEventListener("scroll", onScroll);

/*Geo location and weather */
var locaText = document.querySelectorAll("#locaText");
var locaBtn = document.querySelectorAll("#locationBtn");
var city = document.querySelectorAll("#city");
let weather = {
    apikey: "03184be214402eaeb0a875622dccd906"
};
 // console.log(locaText,locaBtn,city);
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
    let weatherapikey = "8688eee7e6c96843a290a39aae1d348c";
     // sending get request to the api with passing lat and long coordinates to the user position
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
     //parsing json data into javascript object wuth returning iy and in another then function receiving the object that is sent by the api
    .then(response => response.json()).then(result => {
         let allDetails = result.results[0].components; //passing components obj to allDetails variable
        console.log(allDetails);
         let {country,county,postcode,state,state_district} = allDetails; //getting properties from allDetails
        locaBtn.forEach((x)=>{
            x.textContent=`${county},${country},${postcode}`;
        })
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherapikey}&units=metric`)
        .then(response=>response.json()).then(result=>{
            console.log(result)
            let {name} =result;
            let {description} = result.weather[0];
            let {temp} =result.main;
            city.forEach((x)=>{
                x.textContent= name + ', ' + temp + '\u00B0' + 'C'  + ', ' + description;
            })
        }).catch(()=>{
            locaText.forEach((x)=>{
                x.textContent = "Something went wrong"
            })
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
        main.style.color="#4a4a4a";
        category.forEach((x)=>{
            x.style.backgroundColor = "#ffffff";
        });

        carousalCards.forEach((x)=>{
            x.style.backgroundColor = "#ffffff";
        });

        footer.style.backgroundColor="#ffffff"
    }
}

function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display = 'block';
    document.getElementsByTagName('main')[0].style.opacity='0.7'
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    document.getElementsByTagName('main')[0].style.opacity='1'
}


