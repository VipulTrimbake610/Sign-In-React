import { useEffect, useState } from "react";


const Signup = ({status}) =>{
    let [login,setLogin] = useState({email:"",password:""});

   
    function handleLogin(e){
        e.preventDefault();
      
       

        if(login.email != "" && login.password != ""){
            fetch('https://dummyjson.com/auth/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
            username:login.email,
            password:login.password,
        })})
        .then(res =>{
          return res.json();
        })
        .then((data)=>{
            if(data.message){
                alert(data.message);
            }else{
                localStorage.setItem('user',JSON.stringify(data));
                // setStatuss(true);
                // console.log(status);
                status(true);
            }
        })
        .catch(err=>alert(err))
    }else{
        alert("Please fill the Details!");
    }
        
    }
    return (
        <div className="body">
            <form action="">
                <div className="titleDiv">
                    <p className="wb">Welcome back! 👋</p>
                    <div className="title">Sign in to your account</div>
                </div>
                <div className="input">
                    <label htmlFor="">Your email</label>
                    <input type="text" onChange={(e)=>setLogin({...login,email:e.target.value})} />
                </div>
                <div className="input">
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e)=>setLogin({...login,password:e.target.value})}/>
                </div>
                <button onClick={handleLogin}>Continue</button>
                <p className="fp">Forget your password?</p>
            </form>
            <div className="dha">Don’t have an account? <span className="sup">Sign up</span></div>
        </div>
    )
}

export default Signup;