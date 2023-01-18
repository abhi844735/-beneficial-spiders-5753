let bag;
async function fetching_data(query){
    try {
        let res = await fetch(`http://localhost:1100/product?q=${query}`);
        if(res.status==200&&res.ok){
            let data=await res.json();
            // console.log(data.message)
            bag= data.message;
            renderData(data.message)
        }
        
    } catch (error) {
        alert(error.message)
    }
}
let bottom_section = document.querySelector(".bottom_section");
fetching_data()
function renderData(data){
    bottom_section.innerHTML=`${data.map((elem)=>{
        return `<div>
        <img src=${elem.url} alt="">
        <h6 class="name">${elem.name}</h6>
        <p>${elem.material}</p>
        <span class="dis_price">Rs.${elem.discount_price}</span><span class="price">Rs.${elem.price}</span>
        <h5 class="discount">${elem.discount}% Off</h5>
        <p>Total Saving : ${elem.cashback_price}</p>
        <p>Ships in ${elem.cashback_price} day</p>
        <button class="cart_btn">cart</button><button class="wishlist_btn">Wishlist</button>
    </div>`
    }).join(" ")}`
}
let bed_btn=document.querySelector(".bed");
bed_btn.addEventListener("click",()=>{
    fetching_data("Bed")
})
let sofa_btn=document.querySelector(".sofa");
sofa_btn.addEventListener("click",()=>{
    fetching_data("Sofa")
})
let defaulted=document.querySelector(".defaulted");
defaulted.addEventListener("click",()=>{
    fetching_data()
})
let chair=document.querySelector(".chair");
chair.addEventListener("click",()=>{
    fetching_data("Chair")
})
let table=document.querySelector("#table");
table.addEventListener("click",()=>{
    fetching_data("Table")
})
let Rack=document.querySelector(".Rack");
Rack.addEventListener("click",()=>{
    fetching_data("Rack")
})
let cutlery=document.querySelector(".cutlery");
cutlery.addEventListener("click",()=>{
    fetching_data("Cutlery")
})
///
let sort = document.querySelector("#Price")
sort.addEventListener("change",sort_by_price)

function sort_by_price(){
  let sorting = document.querySelector("#Price").value;
  if(sorting == ""){
    window.location.reload()
  }else if(sorting == "LTH"){
    bag.sort((a,b)=> a.discount_price - b.discount_price)
    renderData(bag)
  }else if(sorting == "HTL"){
    bag.sort((a,b)=> b.discount_price - a.discount_price)
    renderData(bag)
  }
  display_products(data)
}
console.log(bag)
document.querySelector("#search").addEventListener("input",()=>{
    let q=document.querySelector("#search").value;
    console.log(q)
    let filterdata=bag.filter((elem)=>{
        return elem.name.toLowerCase().includes(q.toLowerCase());

    })
    renderData(filterdata);
})
