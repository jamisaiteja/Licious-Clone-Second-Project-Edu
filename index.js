// var carouselWidth = document.getElementsByClassName("carousel-inner")[0].scrollWidth;
// var cardWidth = document.querySelector(".carousel-item").offsetWidth;
// console.log(carouselWidth,cardWidth);
// var scrollPosition = 0;
// console.log(scrollPosition);

// document.querySelector(".carousel-control-next").addEventListener("click", function () {
//     if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
//         scrollPosition += cardWidth;
//         console.log(scrollPosition);  //update scroll position
//         $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
//     }
// });

// document.querySelector(".carousel-control-prev").addEventListener("click", function () {
//     if (scrollPosition > 0) {
//         scrollPosition -= cardWidth;
//         $(".carousel-inner").animate(
//             { scrollLeft: scrollPosition },
//             600
//         );
//     }
// });