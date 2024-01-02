import { ButtonProps } from "@/types/component_types";

export default function Button(props:ButtonProps){
    console.log("props",props.title)

    return(
        <div>
            <button>{props.title}</button>
        </div>
    )
}