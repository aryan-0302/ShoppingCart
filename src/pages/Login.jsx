import React from 'react'
import  { Component, useState } from 'react';


function Login() {
  const [formData,setFormData]=useState({
    firstName:"",lastName:"",email:"",country:"India",streetAddress:"",city:"",state:"",postalCode:"",
    comments:false,candidates:false,offers:false,pushNotifications:""
  })

  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData((prev)=>({...prev,[name]:type==="checkbox"?checked:value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of form Data:");
    console.log(formData);
  }
  
    return (
     <div className='flex flex-col items-center'>

      <form onSubmit={submitHandler}>
      <label htmlFor='firstName'>FirstName</label>
      <br></br>
        <input 
        type='text'
        name='firstName'
        placeholder='' 
        value={FormData.firstName} 
        onChange={changeHandler}
        className='outline'
        ></input>
        <br></br>


      <label htmlFor='lastName'>LastName</label>
      <br></br>
        <input 
        type='text'
        name='lastName'
        placeholder='' 
        value={FormData.lastName} 
        onChange={changeHandler}
        className='outline'
        ></input>
        <br></br>


      <label htmlFor='email'>Email Address</label>
      <br></br>
        <input 
        type='text'
        name='email'
        placeholder='love@abcd.com' 
        value={FormData.email} 
        onChange={changeHandler}
        className='outline'
        ></input>
       <br></br>


      <label htmlFor='country'>Country</label>
      <br></br>
      <select id="country" name="country" value={formData.country} onChange={changeHandler}>
        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
      <br></br>


      <label htmlFor='streetAddress'>Street Address</label>
      <br></br>
        <input 
        type='text'
        name='streetAddress'
        id='streetAddress'
        placeholder='B-25C' 
        value={FormData.streetAddress} 
        onChange={changeHandler}
        className='outline'
        ></input>
        <br></br>


      <label htmlFor='city'>City</label>
      <br></br>
        <input 
        type='text'
        name='city'
        id='city'
        placeholder='B-25C' 
        value={FormData.city} 
        onChange={changeHandler}
        className='outline'
        ></input>
        <br></br>


      <label htmlFor='state'>State</label>
      <br></br>
        <input 
        type='text'
        name='state'
        id='state'
        placeholder='Bihar' 
        value={FormData.state} 
        onChange={changeHandler}
        className='outline'
        ></input>
        <br></br>


      <label htmlFor='postalCode'>Postal Code</label>
      <br></br>
        <input 
        type='text'
        name='postalCode'
        id='postalCode'
        placeholder='110077' 
        value={FormData.postalCode} 
        onChange={changeHandler}
        className='outline'
        ></input>
        <br></br>
        <br></br>


  {/* <fieldset>
  <legend>By Email</legend>
  <div className='flex'>
  <input id="comments" name='comments' type='checkbox' checked={formData.comments} onChange={changeHandler}></input>
  <div>
    <label htmlFor='comments'>Comments</label>
    <p>Get notified when someones posts a comment on a posting.</p>
  </div>
  </div>

  <div className='flex'>
  <input id="candidates" name='candidates' type='checkbox' checked={formData.candidates} onChange={changeHandler}></input>
  <div>
    <label htmlFor='candidates'>Candidates</label>
    <p>Get notified when candidate applies for a job.</p>
  </div>
  </div>

  <div className='flex'>
  <input id="offers" name='offers' type='checkbox' checked={formData.offers} onChange={changeHandler}></input>
  <div>
    <label htmlFor='offers'>Offers</label>
    <p>Get notified when a candidate accepts or rejects an offer.</p>
  </div>
  </div>
</fieldset>
<br></br>
<br></br>


<fieldset>
  <legend>Push Notifications</legend>
  <p>These are delievered via SMS to your mobile phone.</p>
  <input type='radio' id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler}></input>
  <label htmlFor='pushEverything'>Everything</label>
  <br></br>
  <input type='radio' id="pushEmail" name="pushNotifications" value="same as email" onChange={changeHandler}></input>
  <label htmlFor='pushEmail'>Same as Email</label>
  <br></br>
  <input type='radio' id="pushNothing" name="pushNotifications" value="No Push Notifications" onChange={changeHandler}></input>
  <label htmlFor='pushNothing'>No Push Notifications</label>
</fieldset> */}


<button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
      </form>
     </div>
    );
  }







/*
Above code is to accumulate the form data through states and
To send form data in react to where ever you want to send
Step-1:
npm install axios
Step-2:
import axios from 'axios';
Step-3:
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('https://example.com/api/endpoint', formData);
    console.log('Form data sent successfully:', response.data);
    // Reset form fields if needed
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  } catch (error) {
    console.error('Error sending form data:', error);
  }
};

NOTE:-Replace 'https://example.com/api/endpoint' with the actual endpoint where you want to send the form data.
*/
export default Login