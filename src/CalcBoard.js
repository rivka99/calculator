import { useState } from "react"
import Button from "./Button"

export default function CalcBoard(props){
    let ans = false
    const [resultGot, setResultGot] = useState(false)
    function backButton(){
        props.setInput(String(props.input).substring(0,(props.input.length-1)))
    }
    function fact(num){
        if(num===0){
            return 1
        }
        return num * fact(num-1)
    }

    function callEnter(){
        enterButton(props.input)
    }
    function ansButton(){
        ans = true
        if(resultGot === true){
            props.setInput("ᴀɴs")
            setResultGot(false)
        }else{
            props.setInput(props.input + "ᴀɴs")
        }
    }
    function enterButton(equation){
        // then add a function to look at the input (with parantesis included, split function into each basic equation
        //(5*4)+((2-4)*(12/3)) should call this function once for the first value, 3 times for the second value (original 2, plus 
        //evaluation of those 2, and finally another time to evaluate both)
        let firstVal 
        let secondVal
        let result
        let badVals = "+/*^"
        if(badVals.includes(equation[0])){
            alert("invalid equation")
            props.setInput("")
        }else{
            if(equation.indexOf("!") != -1){
                if(equation.includes("ᴀɴs")){
                    equation =  equation.replace(/ᴀɴs/gi, String(props.prevResult))
                    equation = equation.replace(/\s/g, '')
                 }
                let pInd = equation.indexOf("!")
                secondVal = equation.substring(0,pInd)
                result = fact(parseFloat(secondVal))
                if(result > 1000000000){
                    result = result.toExponential(4);
                } 
                props.setPrevResult(result)
                props.setInput(result)
                
                setResultGot(true)
            } else if(equation.indexOf("+") != -1){
                if(equation.includes("ᴀɴs")){
                   equation =  equation.replace(/ᴀɴs/gi, String(props.prevResult))
                   equation = equation.replace(/\s/g, '')
                }
                let pInd = equation.indexOf("+")
                equation = String(equation)
                firstVal = equation.substring(0,pInd)
                secondVal = equation.substring(pInd+1)
                result = parseFloat(firstVal)+parseFloat(secondVal) 
                props.setInput(result)
                props.setPrevResult(result)
                setResultGot(true)
            }else if(equation.indexOf("-") != -1 ){
                let pInd
                if(equation.includes("ᴀɴs")){
                    equation =  equation.replace(/ᴀɴs/gi, String(props.prevResult))
                    equation = equation.replace(/\s/g, '')
                 }
                if(equation.indexOf("-") === 0){
                    pInd = equation.indexOf("-",1)
                }else{
                    pInd = equation.indexOf("-")
                }
                
                firstVal = equation.substring(0,pInd)
                secondVal = equation.substring(pInd+1,equation.length)
                result = parseFloat(firstVal)-parseFloat(secondVal) 
                props.setInput(result)
                props.setPrevResult(result)
                setResultGot(true)
            }else if(equation.indexOf("*") != -1){
                if(equation.includes("ᴀɴs")){
                    equation =  equation.replace(/ᴀɴs/gi, String(props.prevResult))
                    equation = equation.replace(/\s/g, '')
                 }
                let pInd = equation.indexOf("*")
                firstVal = equation.substring(0,pInd)
                secondVal = equation.substring(pInd+1,equation.length)
                result = parseFloat(firstVal)*parseFloat(secondVal) 
                let fixResult = +result.toFixed(4);
                props.setInput(fixResult)
                props.setPrevResult(result)
                setResultGot(true)
            }
            else if(equation.indexOf("÷") != -1){
                if(equation.includes("ᴀɴs")){
                    equation =  equation.replace(/ᴀɴs/gi, String(props.prevResult))
                    equation = equation.replace(/\s/g, '')
                 }
                let pInd = equation.indexOf("÷")
                firstVal = equation.substring(0,pInd)
                secondVal = equation.substring(pInd+1,equation.length)
               
                result = parseFloat(firstVal)/parseFloat(secondVal) 
                let fixResult = +result.toFixed(4);
                props.setInput(fixResult)
                props.setPrevResult(result)
                setResultGot(true)
            }else if(equation.indexOf("^") != -1){
                if(equation.includes("ᴀɴs")){
                    equation =  equation.replace(/ᴀɴs/gi, String(props.prevResult))
                    equation = equation.replace(/\s/g, '')
                 }
                let pInd = equation.indexOf("^")
                firstVal = equation.substring(0,pInd)
                secondVal = equation.substring(pInd+1,equation.length)
                result = Math.pow(parseFloat(firstVal),parseFloat(secondVal))
                let fixResult = +result.toFixed(4);
                props.setInput(fixResult)
                props.setPrevResult(result)
                setResultGot(true)
            }
        }
        ans = false
    }
    return(
        <div className="calc-board">
            <input type={"text"} className="val-input" value={props.input}></input>
            <div className="numpad">
            {   
                props.digits.map(button=><Button key = {button.id} digit = {button.digit} input={props.input} setInput={props.setInput} resultGot={resultGot} setResultGot={setResultGot} prevResult = {props.prevResult} setPrevResult={props.setPrevResult}/>)
            }
             <button onClick={ansButton} className="ans-btn">ᴀɴs</button>   
             <button onClick={backButton} className="ans-btn">⌫</button>
             <button onClick={callEnter} className="ans-btn">↩</button>

            </div>
           
        </div>
    )
}