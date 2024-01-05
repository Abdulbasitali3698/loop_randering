import { contactInfoType, contactType } from "@/types/component_types";

export default function DisplayContact(props:contactType){
    return(
        <div>
            <h1>Name:{props.name} </h1>
             <h1>Email:{props.email}</h1>
        </div>
    )
}