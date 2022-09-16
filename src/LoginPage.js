import React, { useContext, useState } from "react";
import pic from "./Images/startbit-logo.png";
import bgpic from "./Images/Blue Future (1).jpg";
import { useSelector,useDispatch } from 'react-redux';
import { AuthAction } from "./Store/ReduxIndex";
import { PermissionActions } from "./Store/PermissionSlice";


export default function LoginPage() {
  const dispatch=useDispatch();
  const [LoginId,setLoginId]=useState('')
  const [Password,setPassword]=useState('')
  const SubmitHandler=async(event)=>{
    event.preventDefault()
    if(LoginId.trim()===''){
      alert('Enter Valid LoginId')
      return
    }
    else if(Password.trim()===''){
      alert('Enter Valid Password')
      return
    }
    const response=await fetch('http://192.168.1.83:5000/api/Authentication',{
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body:JSON.stringify({
        name:LoginId,
        password:Password
      })
    })
    if(!response.ok){
      console.log(response);
      return
    }
    const data=await response.json()
    const UserPermissions=await data.permissionlist;
    console.log(UserPermissions);
    dispatch(PermissionActions.ValidatePermissions(UserPermissions))
    dispatch(AuthAction.Login())
  }
  function validateLoginId(e) {
    const re = /^[0-9\b]+$/;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }
  return (
    <div className="container" style={{marginTop:'6%'}}>
      <div className="row">
        <div className="col-md-6 img-fluid mx-auto d-none d-md-block">
          <img
            src={bgpic}
            alt="Logo"
            style={{ height: "100%", width: "100%" }}
            className="rounded-start w-100"
          />
        </div>
        <div className="col-md-6">
          <div class="card" style={{ width: "100%",border:'none' }}>
            <img class="card-img-top" src={pic} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <form className="form-group" onSubmit={SubmitHandler}>
              <input placeholder="Employee Id" onKeyPress={validateLoginId} onChange={(event)=>{setLoginId(event.target.value)}} className="form-control"  style={{padding:'5%',marginTop:'4%'}}/>
              <input placeholder="Password" type='Password' onChange={(event)=>{setPassword(event.target.value)}} className="form-control" style={{padding:'5%',marginTop:'4%'}}/><br/>
              <button type="submit" className="btn btn-dark" style={{width:'100%',padding:'3%'}}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
