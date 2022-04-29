import React from 'react';
//Types
import {AnswerObject} from './answerObject'
//Styles
//import { Wrapper, ButtonWrapper } from './QuestionCard.styles'


type Props = {
     question: string;
     answers: string[];
     callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
     userAnswer: AnswerObject | undefined;
     questionNr: number;
     totalQuestions: number;
 }

 const QuestionCard: React.FC<Props> = ({
     question, 
     answers, 
     callback, 
     userAnswer, 
     questionNr,
     totalQuestions,
 }) => (
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
    

export default QuestionCard;