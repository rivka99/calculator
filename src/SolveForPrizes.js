
import React, {Component, useState, useEffect}  from "react"
import axios from "axios";
import { Link } from "react-router-dom";
//this will give people random math problems. If they get them correct, they get a spin on a wheel, and then they win a
//prize - a random fun internet link!
//for now, it happens that clicking the button just prints a trivia q to the console :)
export default function SolveForPrize(props){
    const [question, setQuestion] = useState()
    function getQuestion(){
        fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setQuestion(data.results))
        }
    function displayQ(){  
            getQuestion()
            console.log(question[0].question)
          
    
    }

    return(
        <div>
             <Link className = 'link' to="/">Home</Link>
            <button onClick={displayQ}>Click here</button>
       </div>
    )
}