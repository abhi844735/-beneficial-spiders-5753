let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        username:form.username.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value
    }
    registeration(obj);
})
let registeration=async(obj)=>{
   try {
    let res =await fetch("http://localhost:1100/user/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    if(res.ok){
        let data = await res.json();
        alert(data.message);
        window.location.href="login.html";
    }
   } catch (error) {
      alert(error.message)
   }
}