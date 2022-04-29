//import { shuffleArray } from './utils'
export type Question = {
    category : string;
    category_answer: string; ///this used to be "correct_answer"
    career: string; //changed from "difficulty" to "career"
    //incorrect_answers : string[];
    question : string;
    type: string;
}

export enum Career {
    UXUI = "ux/ui",
    FRONTEND = "frontEnd",
    BACKEND = "backEnd",
    DATASCIENCE = "dataScience",
    PROJECTMANAGEMENT = "projectManagement"
}

export type QuestionState = Question & {answers : string[]};
function shuffleArray(array: any[]) {
    [... array].sort(()=> Math.random() - 0.5);
} //I copied this from the tutorial. We don't need to randomize, though, so just list the questions and answers? Placed function here because it gives me an error otherwise
export const fetchQuizQuestions = async(amount : number, career: Career) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${career}&type=multiple`;//this is from tutprial. Our data will be in another file, not a URL
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    return data.results.map((question: Question) => (
        {
            ... question,
            //used to be this : answers: shuffleArray([...question.incorrect_answers, question.correct_answer, changed to:
            answers: shuffleArray([question.category_answer])
        }
        
    ))};
