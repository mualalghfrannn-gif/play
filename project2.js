
let cart = document.querySelector(".cart")


function cart_one(){
     cart.classList.add("active")
}
function icons(){
    cart.classList.remove("active")
}


// search =========================
let search = document.querySelector("form")

function header_search(){
    search.classList.toggle("active2")
}

// ul =======================
let myul = document.querySelector(".nav_ul")
function nav_ul(){
myul.classList.toggle("active3")
}


// ================= img
let imgs = document.querySelector(".main_imgs")
function imgs1(){
imgs.classList.toggle("onclike1")
}


// scrole =======================
let scrolll = document.getElementById("scrole")
// window.onscroll = function(){
//     if (window.scrollY >= 100){
//         scrolll.style.display = "block"
//     }else{
//          scrolll.style.display = "none"
//     }
// }

// scrolll.onclick = function(){
//     window.scrollTo({
//         top0,
//         left: 0,
//         behavior:"smooth",
        
//     })
// }


window.onscroll = function(){
    if(window.scrollY >= 400){
        scrolll.style.display = "block"
    }else{
          scrolll.style.display = "none"
    }
}

scrolll.onclick = function(){
    window.scrollTo({
        top: 0 ,
        left: 0,
        behavior: "smooth",
    })
}






// ====================================

// let myimgs = document.querySelectorAll(".oncl");
// // let icon = document.getElementById("iiiiii")
// let imgssss = document.getElementById("imgsphone");
 
// let myarry_imgss = new Array(
//    " imgs/product/product-9.jpg" ,
//     " imgs/product/product-8.jpg ",
//     "imgs/product/product-7.jpg ",
//    " imgs/product/product-6.jpg ",
//   "  imgs/product/product-5.jpg ",
//    " imgs/product/product-4.jpg",
//      "imgs/product/product-3.jpg ",
//     "imgs/product/product-2.jpg" ,
//   "  imgs/product/product-1.jpg"



// );

// for(let i = 0 ; i < myimgs.length; i++){
// myimgs[i].onclick = function()
// {
// imgssss[i].src = myarry_imgss[i] ;
// }
// }





  let li = document.querySelectorAll(".oncl");
let imgss = document.getElementById("imgsphone")
let myarry = new Array(
  " imgs/product/product-9.jpg" ,
   " imgs/product/product-8.jpg ",
   "imgs/product/product-7.jpg ",
  " imgs/product/product-6.jpg ",
 "  imgs/product/product-5.jpg ",
  " imgs/product/product-4.jpg",
    "imgs/product/product-3.jpg ",
   "imgs/product/product-2.jpg" ,
 "  imgs/product/product-1.jpg"
  
);
    for(let i = 0 ; i<= li.length;i++){
        li[i].onclick = function(){
            imgss.src = myarry[i];
            
        }
     
    }