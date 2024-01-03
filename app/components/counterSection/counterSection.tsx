"use client"

import Button from "../button/button"

export default function CounterSection(){
    const onClickHandler=()=>{
        alert("Onclick handler by counter section")
    }
    return(
        <div> 
            <Button title="Add" onClickHandler={onClickHandler}/>

        </div>
    )
}