import React, { useState, useRef } from "react";
import Exercises from "./components/Exercises";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddButton from "./components/AddButton";
import { TITLES as initialTitles } from "./data";

function App() {
  const [searchText, setSearchText] = useState("");
  const [titles, setTitles] = useState(initialTitles);
  const exercisesRef = useRef(null);

  const handleAddExercise = () => {
    const newExerciseTitle = prompt("Enter a new exercise name:");
    if (newExerciseTitle) {
      const newExercise = { title: newExerciseTitle };
      setTitles([...titles, newExercise]);
    }
  };

  const scrollToExercise = (exerciseTitle) => {
    if (exercisesRef.current) {
      const exerciseElement = exercisesRef.current.querySelector(
        `[data-title="${exerciseTitle}"]`
      );
      if (exerciseElement) {
        exerciseElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div id="container">
      <Header />
      <AddButton handleAddExercise={handleAddExercise} />
      <SearchBar
        setSearchText={setSearchText}
        titles={titles}
        scrollToExercise={scrollToExercise}
      />
      <div id="exercises" ref={exercisesRef}>
        <Exercises searchText={searchText} titles={titles} />
      </div>
    </div>
  );
}

export default App;
