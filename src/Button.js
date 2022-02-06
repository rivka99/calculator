export default function Button(props){
    function updateVal(){
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