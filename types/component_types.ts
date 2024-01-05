export type ButtonProps={

    title:string;
    data?:string;
    showtag?:boolean;
    onClickHandler:()=>void
}

export type contactInfoType={
    contactInfo:{name:string;
    email:string}
    

}
export type contactType={
    name:string,
    email:string,
    phone:number,
}
export type onChangeEventType={
    target:{value:string,
    name:string}
}