export default function Button(props){
    function updateVal(){
        // possibly find a way to figure out if this button is a digit or an operation (or seperate operations,
        //into a different component type?? if button is an operation, the result should be allowed to perform operations on)
        if(props.resultGot === true){
            props.setInput(props.digit)
            props.setResultGot(false)
        }else{
            props.setInput(props.input + props.digit)
        }
        
    }
    return(
        <div>
            <button onClick={updateVal}>{props.digit}</button>
        </div>
    )
}