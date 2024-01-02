"use client"

export default function Counter(){
const onClickHandler=()=>{
    alert("Clicked")
}
    return(
        <div>
            <button onClick={onClickHandler} style={{backgroundColor:"red"}}>Add</button>
        </div>
    )
}