import { useState } from "react"
import Button from "./Button"

export default function CalcBoard(props){
    const [resultGot, setResultGot] = useState(false)
    function backButton(){
        props.setInput(props.input.substring(0,(props.input.length-1)))
    }
    function enterButton(){
        //replace props.input with a parameter 'equation' and pass props.input as a parameter.
        // then add a function to look at the input (with parantesis included, split function into each basic equation
        //(5*4)+((2-4)*(12/3)) should call this function once for the first value, 3 times for the second value (original 2, plus 
        //evaluation of those 2, and finally another time to evaluate both)
        let firstVal 
        let secondVal
        let result
        let badVals = "+/*"
        if(badVals.includes(props.input[0])){
            alert("invalid equation")
            props.setInput("")
        }else{
            if(props.input.indexOf("+") != -1){
                let pInd = props.input.indexOf("+")
                firstVal = props.input.substring(0,pInd)
                secondVal = props.input.substring(pInd+1,props.input.length)
                result = parseFloat(firstVal)+parseFloat(secondVal) 
                props.setInput(result)
                setResultGot(true)
            }else if(props.input.indexOf("-") != -1 && props.input.indexOf("-") != 0){
                let pInd = props.input.indexOf("-")
                firstVal = props.input.substring(0,pInd)
                secondVal = props.input.substring(pInd+1,props.input.length)
                result = parseFloat(firstVal)-parseFloat(secondVal) 
                props.setInput(result)
                setResultGot(true)
            }else if(props.input.indexOf("*") != -1){
                let pInd = props.input.indexOf("*")
                firstVal = props.input.substring(0,pInd)
                secondVal = props.input.substring(pInd+1,props.input.length)
                result = parseFloat(firstVal)*parseFloat(secondVal) 
                props.setInput(result)
                setResultGot(true)
            }
            else if(props.input.indexOf("/") != -1){
                let pInd = props.input.indexOf("/")
                firstVal = props.input.substring(0,pInd)
                secondVal = props.input.substring(pInd+1,props.input.length)
                result = parseFloat(firstVal)/parseFloat(secondVal) 
                let fixResult = +result.toFixed(4);
                props.setInput(fixResult)
                setResultGot(true)
            }
        }
    }
    return(
        <div className="calc-board">
            <input type={"text"} className="val-input" value={props.input}></input>
            <div className="numpad">
            {   
                props.digits.map(button=><Button key = {button.id} digit = {button.digit} input={props.input} setInput={props.setInput} resultGot={resultGot} setResultGot={setResultGot}/>)
            }   
             <button onClick={backButton}>⇚</button>
             <button onClick={enterButton}>▶</button>
            </div>
           
        </div>
    )
}