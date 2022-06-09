import React from "react";
import CardItem from "./CardItem";


const Card =() => {

const data =[  
  { 
    image: "../images/books.jpg",
    title: 'Tutorials',
    description: 
    'short description here',
    },
  { 
    image: "../images/books.jpg",
    title: 'Courses',
    description: 
    'short description here',
    },
  { 
    image: "../images/books.jpg",
    title: 'Podcasts',
    description: 
    'short description here',
    },
  { 
    image: "../images/books.jpg",
    title: 'Books',
    description: 
    'short description here',
   },
  ];

  return (
    <div 
      className= "d-flex align-items-center"
      style={{width: '100vw', height: '100vh'}}
      >
      {data.map((item, i)=> {
        return (
          <CardItem 
          key={i}
          image={item.image}  
          title={item.title}
          description={item.description}
          />
        )
      })}
    </div>
  )
};

export default Card;
