import React from 'react';
//Types
import {AnswerObject} from './answerObject'
//Styles
//import { Wrapper, ButtonWrapper } from './QuestionCard.styles'


interface Props {
     question: string;
     answers: string[];
     callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
     userAnswer: AnswerObject | undefined;
     questionNr: number;
     totalQuestions: number;
 }

 const QuestionCard = ({
     question, 
     answers, 
     callback, 
     userAnswer, 
     questionNr,
     totalQuestions,
 }: Props) => {
    const category_a = "UX/UI";
    const category_b = "Front End";
    const category_c = "Back End";
    const category_d = "Data Science";
    const category_e = "Project Management";

    const showResults = () =>{

        let answerA= 0;
        let answerB= 0;
        let answerC= 0;
        let answerD= 0;
        let answerE= 0; 
        
        while (questionNr <= 10) { 
        if (userAnswer?.answer=== "A")
            {answerA += 1}
        else if (userAnswer?.answer=== "B")
            {answerB += 1}
        else if (userAnswer?.answer=== "C")
            {answerC += 1}
        else if (userAnswer?.answer=== "D")
            {answerD +=1}
        else if (userAnswer?.answer=== "E")
           {answerE += 1}
        }
        
        
        if (answerA > answerB && answerA > answerC && answerA > answerD && answerA > answerE)
        {console.log(`Your are best suited for a career in ${category_a}`)}
        
        else if (answerB > answerA && answerB > answerC && answerB > answerD && answerB > answerE)
        {console.log(`Your are best suited for a career in ${category_b}`)}
        
        else if (answerC > answerA && answerC > answerB && answerC > answerD && answerC > answerE)
        {console.log(`Your are best suited for a career in ${category_c}`)}
        
        else if (answerD > answerA && answerD > answerB && answerD > answerC && answerD > answerE)
        {console.log(`Your are best suited for a career in ${category_d}`)}
        
        else 
        {console.log(`Your are best suited for a career in ${category_e}`)}
        console.log(answerA)

        }
        //if question number = 10 (when we answer all the questions)--> call showResults con boton y eliminar next/previous
    return (
        <>
        
         <p className="number">
             Question: {questionNr} / {totalQuestions}        
         </p>
         <p dangerouslySetInnerHTML={{ __html: question}}></p>
              {answers.map(answer => (
                 <div 
                 key={answer}
                 //category={userAnswer?.categoryAnswer === answer} //need a counter here, changed to category
                 //userClicked={userAnswer?.answer===answer}
                  >
                      <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                      <span dangerouslySetInnerHTML={{ __html: answer}} />
                      </button>
                 </div>
     
         ))}    
     </>
        
     );
 }
 
    

export default QuestionCard;