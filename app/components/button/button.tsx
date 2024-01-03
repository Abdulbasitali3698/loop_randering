"use client"
import { ButtonProps } from "@/types/component_types";

export default function Button(props:ButtonProps){
    console.log("props",props.title)

    return(
        <div>
            <button onClick={props.onClickHandler}>{props.title}</button>
        </div>
    )
}