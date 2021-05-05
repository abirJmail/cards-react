import React from "react";
import "./Cards.css";
import { Card } from "react-bootstrap";

const MyCod = () => {
  const cardInfo = [
    { image:"https://avatars.githubusercontent.com/u/82514715?v=4", Name:"Abir Jmail", hackerspace:"Tunis", learning:" Full-Stack JavaScript Bootcamp ",insructor:"Mehdi Hannachi",rank:"3250" , per:"50"},
    { image:"https://gomycodewebsite.blob.core.windows.net/website/img/intro_4_d7bfe805c6.jpg", Name:"Isam kamoun", hackerspace:"Tunis", learning:"Digital Marketing ",insructor:"Mehdi Hannachi",rank:"3300", per:"55"},
    { image:"https://gomycodewebsite.blob.core.windows.net/website/img/Kids_temoignage_2_11770ed69b.jpg", Name:"Mohamed Gebssi", hackerspace:"Gabes", learning:"Kids track",insructor:"Emna Mezni",rank:"2700", per:"37"},
    { image:"https://gomycodewebsite.blob.core.windows.net/website/img/intro_1_5c025f03e1.jpg", Name:"Fatma Benali", hackerspace:"Tunis Online", learning:"",insructor:"Slim Amdouni",rank:"2980", per:"41"},
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>Student: {card.Name}   {card.rank}lp</Card.Title>
          <Card.Text> {card.Name} has a {card.per}% learning progress in the {card.learning} in {card.hackerspace} with our insructor {card.insructor}.</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MyCod;