import React from "react";
import { Button } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";


function Card() {
  const { englishMode } = useTheme();
  return (

    <div className="card">
        <div className="card_body">
        <img 
            src="https://picsum.photos/318/180"
             alt="filler"  
        />
        <h2 className="card_title">Tutorial 1</h2>
        <p className="card_description">Learn to do this and this and that</p>
        <Button className="resources-button m-5 mb-md-0">
             Visit
        </Button>
    </div>
    </div>


  );
};

export default Card;
