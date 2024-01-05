"use client"

import { useState } from "react";
import DisplayContact from "./displayContact"
import { contactInfoType, contactType, onChangeEventType } from "@/types/component_types";

export default function ContactForm(){
 
    // var userName:string="default";
    // const[userName,setUserName]=useState<string>("")
    // const[email,setEmail]=useState<string>("")
    // const[text,setText]=useState<string>("")
    const [contactInfo,setContactInfo]=useState<contactType>({
        name:"",
        email:"",
        phone:0

    })

    const onChangeHandler=(event:onChangeEventType)=>{
        let userDetails={
            ...contactInfo,
            [event.target.name]:event.target.value

        }
        setContactInfo(userDetails)
    }
        
        
    //     if(event.target.name="email"){
    //         setEmail(event.target.value)
    //     }
    //     else{
    //         setUserName(event.target.value)}
    // }


//    const getUserNameHandler=(event:onChangeEventType)=>{
//     console.log("getUserNameHandler",event.target.value);
//     // userName=event.target.value;
//     setUserName(event.target.value);
//    }

//    const onChangeEmailHandler=(event:onChangeEventType)=>{
//     setEmail(event.target.value)

//    }
  
    const onClickHandler=()=>{
    alert("clicked")

   }

    return(
        <>
        <form  className="max-w-md mx-auto">
      <div className="mb-4">
        {/* {userName} */}
        <label htmlFor="name" className="block text-gray-600">Name</label>
        <input
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">Email</label>
        <input
          onChange={onChangeHandler}  
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600">Phone</label>
        <input
          onChange={onChangeHandler}  
          type="number"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-600">Message</label>
        <textarea 
          id="message"
          name="message"
          
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
          required
        /> 
      </div>

      <button
        onClick={onClickHandler}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
    <DisplayContact contactInfo={contactInfo}/>
    </>
    )
}