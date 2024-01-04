"use client"
import { useState } from "react";

import Button from "../button/button"

export default function CounterSection(){
    var count:number=0;
    const[countState,setCountState]=useState(0)
    const onClickAddHandler=()=>{
        // alert("Add")
        count=count+1;
        setCountState(countState+1)
        console.log("onClickAddHandler",count)
    }
    const onClickMinusHandler=()=>{
        // alert("Minus")
        count=count-1;
        setCountState(countState-1)
        console.log("onClickMinusHandler",count)
    }

    const resetHandler=()=>{
        setCountState(0)
    }
    return(
        <div> 
            <Button title="+" onClickHandler={onClickAddHandler}/>
            <span>{countState}</span>
            <Button title="-" onClickHandler={onClickMinusHandler}/>
            <br />
            <Button title="Reset" onClickHandler={resetHandler}/>
        </div>
    )
}