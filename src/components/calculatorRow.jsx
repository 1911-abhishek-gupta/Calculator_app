import React from "react";

function CalcRow(props){

    function handlechanges(event){
       

        if(event.target.value==="<-"){
            props.ondelete()
        }else{
            if(event.target.value==="="){
                props.onevaluate();

        }
        else{
            if(event.target.value==="C"){
                props.onclear();

        }else{props.onclick(event.target.value);}
    }
    }
    }
    return(
        <div>
        <button  onClick={handlechanges} value={props.first}>{props.first}</button>
        <button  onClick={handlechanges} value={props.second}>{props.second}</button>
        <button  onClick={handlechanges} value={props.third}>{props.third}</button>
        <button  onClick={handlechanges} value={props.fourth}>{props.fourth}</button>
    </div>
    );
}

export default CalcRow;