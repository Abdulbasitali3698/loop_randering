import Button from "@/app/components/button/button";
import CounterSection from "@/app/components/counterSection/counterSection";

export default function ContactForm(){
    return(
        <div>
            <Button title="Contact Me " onClickHandler={()=>alert("on click by contact page")}/>
            
        </div>
    )
}