import React,{useState} from "react";
import CalcRow from "./calculatorRow";

function CalculationArea(){

  

  const [output,setoutput]=useState([]);
  const [outputs,setoutputs]=useState("");
  

  function appendArray(value){

    setoutput((prevValue)=>{

      return[...prevValue,value]
    })

  }

  function deleteElement(){
    console.log("triggered");
  output.pop();
    
  setoutput((prevValue)=>{
    return[...prevValue]
  })
   
  }
  

  function evaluate(){
    let values=[];
    let ops=[];

    for(let i=0;i<output.length;i++){
      if(output[i]===''){
        continue;
      }

      if(output[i]>='0'&&output[i]<='9'){
        let sbuf='';

        while(i<output.length&&output[i]>=0&&output[i]<='9'){
          sbuf=sbuf+output[i++];
        }
        values.push(parseInt(sbuf,10));
        i--
      }

      else if(output[i]===')'){
        while(ops[ops.length-1]!=='('){
          values.push(applyOp(ops.pop(),values.pop(),values.pop()));
        }
        ops.pop();
      }

      else if(output[i]==='+'||output[i]==='-'||output[i]==='*'||output[i]==='/'){
        while(ops.length>0 && hasPrecedence(output[i],ops[ops.length-1])){
          values.push(applyOp(ops.pop(),values.pop(),values.pop()));
        }
        ops.push(output[i]);
      }
    }
while(ops.length>0){
  values.push(applyOp(ops.pop(),values.pop(),values.pop()));
}

var myNumber=values.pop();

var mystring=myNumber.toString();


setoutput([]);



setoutput((prevValue)=>{
  return [...prevValue,mystring];
})



  }

  function hasPrecedence(op1,op2){
    if(op2==='('||op2===')'){
      return false;
    }
    if((op1==='*'||op1==='/')&&(op2==='+'||op2==='-')){
      return false
    }
    else{
      return true;
    }
  }

  function applyOp(op, b, a)
    {
        switch (op)
        {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0)
            {
                document.write("Cannot divide by zero");
            }
            return parseInt(a / b, 10);
        }
        return 0;
    }
     


    function clearArray(){
      setoutput([]);
    }

  console.log(output);


    return(<div className="calculator">
    <div>
        <input type="text" readOnly  value={output}></input>
    </div>
    <button onClick={clearArray} className="clear">C</button>
      <CalcRow first="7" second="8" third="9" fourth="*" onclick={appendArray} ondelete={deleteElement}/>
      <CalcRow first="4" second="5" third="6" fourth="-" onclick={appendArray} ondelete={deleteElement}/>
      <CalcRow first="1" second="2" third="3" fourth="+" onclick={appendArray} ondelete={deleteElement}/>
      <CalcRow first="0" second="/" third="<-" fourth="=" onclick={appendArray} ondelete={deleteElement} onevaluate={evaluate}/>
     
      </div>
    );
    }

export default CalculationArea;
