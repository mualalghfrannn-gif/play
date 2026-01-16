
let cart = document.querySelector(".cart")


function cart_one(){
    //  cart.classList.add("active")
    cart.style.right = "0px"
}
function icons(){
    cart.style.right = "-100%"
}


// hpone ==========================
let hpone = document.querySelector(".hpone") ;
hpone.onclick = function(){
Element.href = "tel:+963997591670"
console.log("hello my hpne")
}


// username ==========================

 let user_clike = document.getElementsByClassName("user_clike");
    user_clike.onclick = function(){
        user_form.style.display = "block"
    }
      
    let user_form = document.querySelector(".username");

 function goloooo(){
    // user_form.classList.toggle("active11")
    // user_form.classList.remove("remove11")
    user_form.style.top = "0px"

    console.log("hello")
 }

 function goloooooo(){
user_form.style.top = "-100%"
 }

// search =========================

let search = document.querySelector(".headet_form")

function header_search(){
if(search.style.top == "130px"){
    search.style.top = "-100%" ;
    return ;
}else{
   search.style.top = "130px";
    console.log("hello i am serche") ;
}
 
}
// ul =======================
let myul = document.querySelector(".nav_ul")
function nav_ul(){

    if(myul.style.top == "100%"){
        myul.style.top = "-200%" ;
        return ;
    }else{
        myul.style.top = "100%" ;
    }




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
    if(window.scrollY >= 500){
        scrolll.style.display = "block" ; 

        hpone.style.display = "block" ;
    }else{
          scrolll.style.display = "none"
          hpone.style.display = "none" ;
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


//    


