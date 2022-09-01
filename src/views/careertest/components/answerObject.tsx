//import { fetchQuizQuestions } from './API';
// Components
//import QuestionCard from './components/QuestionCard';
// types
//import { QuestionState, Difficulty } from './API';
// Styles
//import { GlobalStyle, Wrapper } from './App.styles';



export type AnswerObject = {
    question: string;
    answer: string;
    category: string; //this was "correct : boolean" and I changed it to string for our quiz
    categoryAnswer: string; //changed from "correctAnswer to categoryAnswer"
  };