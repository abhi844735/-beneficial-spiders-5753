import footer from './footer.js'

let footer_section = document.getElementById("footer");
footer_section.innerHTML = footer();

let img_click=document.querySelectorAll(".img-click");
for(let images of img_click){
    images.addEventListener("click",()=>{
        window.location.href="product.html"
    })
}
let menus=document.querySelectorAll(".menu");
for(let menu of menus ){
    
    menu.addEventListener("click",()=>{
        window.location.href="product.html"
    })
}
let logged_name=localStorage.getItem("username")||"";
let username = document.getElementById("username");
username.innerText=logged_name;
username.style.color="red";


let logout=document.getElementById("logout");
logout.addEventListener("click",(e)=>{
    localStorage.setItem("username","");
    localStorage.setItem("token","");
})

// adding footer
// import navbar from './navbar.js'

//     let navbar_section =  document.getElementById("navbar");
//     navbar_section.innerHTML = navbar();

