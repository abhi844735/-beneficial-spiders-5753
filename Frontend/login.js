let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
       
        email:form.email.value,
        
        password:form.password.value
    }
    login(obj);
})
let login=async(obj)=>{
   try {
    let res =await fetch("https://tender-lamb-belt.cyclic.app/user/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify(obj)
    })
    if(res.ok){
        let data = await res.json();
        let token=data.token;
        localStorage.setItem("token",token);
        localStorage.setItem("username",data.username)
        if(data.message=="wrong credentials"){
            alert(data.message);
        }else{
            alert(data.message)
            window.location.href="index.html";
        }
       
       
    }
    if(res.status==501){
        alert("email not found")
    }
   } catch (error) {
      alert(error.message)
   }
}
