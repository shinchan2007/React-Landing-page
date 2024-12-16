import { Modal } from "bootstrap";
import React from "react";
import { useState } from "react";

function Header(){
    const [Showlist,Showlistset] = useState(false);
    let displayer = ()=>{
        Showlistset((s)=>!s);

    }
    let [login,loginset] = useState(false);
    const [Un,UserNameSet] = useState("");
    const [Ps,PasswordSet] = useState("");
    const usernamesetter = (e) => UserNameSet(e.target.value)
    const passwordsetter = (e) => PasswordSet(e.target.value)
    const [result ,setResult ] = useState("");

    
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Loging In....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0d0d0a6f-7e2c-46f5-9e70-e3644f8d529f");
      formData.append("un-", `${Un}`);
      formData.append("ps-", `${Ps}`);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Login SuccessFul");
        event.target.reset();
        loginset(true);
        let loggedinsetting = document.getElementById("loggedinsetting");
        loggedinsetting.innerHTML =  `<i><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm.66 370Q398-80 325-111.5t-127.5-86q-54.5-54.5-86-127.27Q80-397.53 80-480.27 80-563 111.5-635.5q31.5-72.5 86-127t127.27-86q72.76-31.5 155.5-31.5 82.73 0 155.23 31.5 72.5 31.5 127 86t86 127.03q31.5 72.53 31.5 155T848.5-325q-31.5 73-86 127.5t-127.03 86Q562.94-80 480.47-80Zm-.47-60q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/></svg></i>`

      } else {
        console.log("Error", data);
        // setResult(data.message);
        setResult("Invalid Username Or Password!!!");
      }
    };
  
    return(
       <>
            <header className="p-2">
               
                <b className="h1 container-sm mx-2  my-2 topic" ><i className="fa fa-paper-plane"> </i>Boundless Journeys</b>
                <ul className={`${Showlist?"showul":""}`} >
                    <li><a href="#"className="btn btn-outline-light rounded-pill link-button "onClick={displayer}>Home</a></li>
                    <li><a href="#"className="btn btn-outline-light rounded-pill link-button "onClick={displayer}>About</a></li>
                    <li><a href="#"className="btn btn-outline-light rounded-pill link-button "onClick={displayer}>Service</a></li>
                    <li><a href="#"className="btn btn-outline-light rounded-pill link-button "onClick={displayer}>Contact</a></li>

                    <li className={`${login?"":"btn"}  rounded-pill  login btn-dark`}
                        onClick={displayer}
                        type="button"
                        data-bs-toggle={login?"":"modal"} 
                        data-bs-target={login?"":"#exampleModal"}
                        disabled={login} id="loggedinsetting"  style={{ pointerEvents: login ? "none" : "auto", opacity: login ? 0.5 : 1,height:login?"48px":"40px",width:login?"auto":"70px" }}>
                        login
                        </li>
                </ul>
                    <li ><button className="fa fa-bars bars" onClick={displayer}></button></li>
            </header>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <form onSubmit={onSubmit} >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title  h-1" id="exampleModalLabel" >Login</h1>
      </div>
      <div className="modal-body">
      <div className="form-floating">
        <input type="text" placeholder="" id="Username" className="form-control" required onChange={usernamesetter} disabled={login}/>
        <label htmlFor="Username">UserName</label>
      </div>
      <br />
      <div className="form-floating">
        <input type="password" placeholder="" id="password" className="form-control" required onChange={passwordsetter} disabled={login}/>
      <label htmlFor="password">Password</label></div>
      </div>
      <a className="Forgotpass" style={{pointerEvents:login?"none":"auto"}}>ForgotPassword?</a>

      <div className="orloginwith">
      <hr />
      <p>Or Login With</p>
      <hr /></div>
      <br />
      <button className="google" disabled={login} type="button"><i className="fa fa-google " ></i> Google</button>
      <button className=" apple" disabled={login} type="button"><i className="fa fa-apple " ></i> Apple</button>
      <p className="result">{result}</p>
      
      {/* 0d0d0a6f-7e2c-46f5-9e70-e3644f8d529f */}
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-dark close" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-dark " disabled={login}>{login?"Logged In":"Login"}</button>
      </div>
    </div>
  </div>
        </form>
</div>
            </>
    );
}

export default Header;