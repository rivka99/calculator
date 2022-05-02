
import React, {Component, useState, useEffect}  from "react"
import axios from "axios";
//this will give people random math problems. If they get them correct, they get a spin on a wheel, and then they win a
//prize - a random fun internet link!
export default function SolveForPrize(props){
    const [question, setQuestion] = useState()
    function getQuestion(){
        fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setQuestion(data.results))
        }
    getQuestion()
    function displayQ(){  
            console.log(question[0].question)
          
    
    }

    return(
        <div>
            <button onClick={displayQ}>Click here</button>
       </div>
    )
}