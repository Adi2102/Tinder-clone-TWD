import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import db from "../firebase";

const TinderCards = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    db.collection("user").onSnapshot((snapshot) =>
      setUser(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {user.map((person) => (
          <TinderCard
            className="swipe"
            key={person.id}
            preventSwipe={["up", "down"]}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
