import { directorType } from "@/types/about_types"

export default function About(){
   const listOfDirectors:directorType[]=[{
    name:"ali",
    title:"CEO",
    intro:"Multi-Tanlented",
    facebookUrl:"fb.com/ali_ahmad"
   },
   {
    name:"ahmad",
    title:"Manager",
    intro:"COCO-2",
    facebookUrl:"fb.com/ahmad_hasan"
   },{
    name:"umair",
    title:"App-developer",
    intro:"Developer",
    facebookUrl:"fb.com/umair_agri"
   },{
    name:"mubeen",
    title:"Fiverr Expert",
    intro:"Hard-Worker",
    facebookUrl:"fb.com/mubeen_police"
   },{
    name:"shahroze",
    title:"SQA",
    intro:"Tester",
    facebookUrl:"fb.com/shahroze_baba"
   }]
    
   return(
        <div>
            <h1>List Of Directors</h1>
            {/* <h2>1-{listOfDirectors[0]}</h2>
            <h2>2-{listOfDirectors[1]}</h2>
            <h2>3-{listOfDirectors[2]}</h2>
            <h2>4-{listOfDirectors[3]}</h2>
            <h2>5-{listOfDirectors[4]}</h2> */}
            {/* {listOfDirectors.map((item, index)=>{
                return(
                    <h2>{index+1}-{item}</h2>
                )
            })} */}
            {listOfDirectors.map((item,index)=>{
                return(
                    <div>
                        <h1>Name:{item.name}</h1>
                        <h2>Title:{item.title}</h2>
                        <h3>Intro: {item.intro}</h3>
                        <h4>FacbookUrl: {item.facebookUrl}</h4>
                    </div>
                )
            })}

            


        </div>
    )
}