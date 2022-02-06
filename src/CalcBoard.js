import Button from "./Button"
export default function CalcBoard(props){
    return(
        <div className="calc-board">
            
            {   
                props.digits.map(button=><Button key = {button.id} digit = {button.digit}/>)
            }   
            
        </div>
    )
}